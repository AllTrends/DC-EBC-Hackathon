import React from "react";
import type { Pair } from "~/types";

interface PairHeaderProps {
  pair: Pair;
}

const PairHeader = (props: PairHeaderProps) => {
  const price = getPrice(props.pair.numerator, props.pair.denominator);
  const change = getChange(props.pair.numerator, props.pair.denominator);
  const high = getHigh(props.pair.numerator, props.pair.denominator);
  const low = getLow(props.pair.numerator, props.pair.denominator);

  function getPrice(numerator: string, denominator: string) {
    console.log(`Get price for ${numerator}Perp/${denominator} pair.`);
    const _price = 1000; // Call API
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(_price);
  }

  function getChange(numerator: string, denominator: string) {
    console.log(`Get 24h Change for ${numerator}Perp/${denominator} pair.`);
    const _change = 0.0564; // Call API
    if (_change < 0) {
      return (_change * 100).toFixed(2) + "%";
    } else {
      return "+" + (_change * 100).toFixed(2) + "%";
    }
  }

  function getHigh(numerator: string, denominator: string) {
    console.log(`Get 24h High for ${numerator}Perp/${denominator} pair.`);
    const _high = 1200; // Call API
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(_high);
  }

  function getLow(numerator: string, denominator: string) {
    console.log(`Get 24h Low for ${numerator}Perp/${denominator} pair.`);
    const _low = 800; // Call API
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(_low);
  }

  return (
    <div className="container mx-auto flex w-full items-center justify-start gap-12 p-5 text-white">
      <div className="relative">
        <button className="flex font-bold shadow hover:shadow-xl">
          <div className="h-full text-xl">
            {props.pair.numerator}Perp/{props.pair.denominator}
          </div>
        </button>
      </div>

      <div>
        <div className="font-semibold">Price</div>
        <div>{price}</div>
      </div>
      <div>
        <div className="font-semibold">24h Change</div>
        <div
          className={
            change.startsWith("-") ? "text-[#eb4034]" : "text-[#49cc10]"
          }
        >
          {change}
        </div>
      </div>
      <div>
        <div className="font-semibold">24h High</div>
        <div>{high}</div>
      </div>
      <div>
        <div className="font-semibold">24h Low</div>
        <div>{low}</div>
      </div>
    </div>
  );
};

export default PairHeader;
