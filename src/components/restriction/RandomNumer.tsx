type RandomNumerType = {
  value: number;
};

type PositiveNumber = RandomNumerType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumerType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroNumber = RandomNumerType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RandomNumerProps = PositiveNumber | NegativeNumber | ZeroNumber;

export const RandomNumer = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumerProps) => {
  return (
    <div>
      {value} :{isPositive && "positive"}
      {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};
