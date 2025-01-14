// type topHeaderProbs = {
//   label: string;
//   labelStyle: string;
//   heading: string;
//   headingStyle: string;
//   summary?: string;
//   summaryStyle: string;
// };

import { Children, ReactNode } from "react";

// export default function TopHeader({
//   label,
//   heading,
//   summary,
//   labelStyle,
//   headingStyle,
//   summaryStyle,
// }: topHeaderProbs) {
//   return (
//     <div className="text-center">
//       <h4 className={labelStyle}>{label}</h4>
//       <h1 className={headingStyle}>{heading}</h1>
//       <p className={summaryStyle}>{summary}</p>
//     </div>
//   );
// }

type topHeaderProbs = {
  children: ReactNode;
};

export default function TopHeader(props: topHeaderProbs) {
  return (
    <div className="text-center w-[100%] md:w-[45%] mx-auto p-6 md:p-10">
      {props.children}
    </div>
  );
}
