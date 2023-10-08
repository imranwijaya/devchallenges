import { NextResponse } from "next/server";
import type {
  Country,
  MappedCountry,
  ApiSuccessResponseBody,
  ApiErrorResponseBody,
} from "../../types/api-response-body";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const url = "https://restcountries.com/v3.1/all";
    const res = await fetch(url, { method: "GET" });

    if (res.ok) {
      const resJson: Country[] = await res.json();
      const mappedData: MappedCountry[] = resJson.reduce(
        (acc: MappedCountry[], e) => {
          if (e.capital && e.capital.length > 0) {
            const mapped = {
              name: e.name.common,
              capital: e.capital[0],
              flag: e.flags.svg,
            };
            acc.push(mapped);
          }

          return acc;
        },
        [],
      );

      const shuffledData = shuffleArray(mappedData);

      const shuffledQuestions = shuffledData.map((e) => {
        const options = getOptionsArray([...shuffledData], 3, e.name);
        const shuffledOptions = shuffleArray([...options, e.name]);

        return { country: e, answer: e.name, options: shuffledOptions };
      });

      return NextResponse.json<ApiSuccessResponseBody>({
        statusCode: res.status,
        message: res.statusText,
        totalCountries: resJson.length,
        data: shuffledQuestions,
      });
    }

    return NextResponse.json<ApiErrorResponseBody>(
      { statusCode: res.status, message: res.statusText, data: null },
      { status: res.status },
    );
  } catch (error) {
    return NextResponse.json<ApiErrorResponseBody>(
      { statusCode: 500, message: "Internal Server Error", data: null },
      { status: 500 },
    );
  }
}

const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const getOptionsArray = (
  array: MappedCountry[],
  n: number,
  matcher: string,
) => {
  const output = [];

  for (let i = 0; i < n + 1; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);

    if (array[randomIndex].name !== matcher) {
      output.push(array[randomIndex].name);
    }

    array.splice(randomIndex, 1);
  }

  return output.slice(0, 3);
};
