type serviceIconProbs = {
  selected: boolean;
  iconStyle: string;
};

export default function ServiceIcon(probs: serviceIconProbs) {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69.2603 6.31401C66.7205 3.77427 62.5491 3.96089 60.2463 6.71728L49.8451 19.167L56.4075 25.7294L68.8572 15.328C71.6132 13.0251 71.7998 8.8536 69.2603 6.31401Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M73.9028 27.605V60.7532C73.9028 66.1243 69.549 70.4796 64.1779 70.4796H55.1842C60.5554 70.4796 64.9091 66.1243 64.9091 60.7532V27.605H73.9028Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0083 22.448C14.6243 22.448 15.9345 21.138 15.9345 19.5219C15.9345 17.9057 14.6243 16.5957 13.0083 16.5957C11.3922 16.5957 10.0822 17.9057 10.0822 19.5219C10.0822 21.138 11.3922 22.448 13.0083 22.448Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3431 22.448C24.9591 22.448 26.2693 21.138 26.2693 19.5219C26.2693 17.9057 24.9591 16.5957 23.3431 16.5957C21.727 16.5957 20.4169 17.9057 20.4169 19.5219C20.4169 21.138 21.727 22.448 23.3431 22.448Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.6778 22.448C35.2938 22.448 36.604 21.138 36.604 19.5219C36.604 17.9057 35.2938 16.5957 33.6778 16.5957C32.0617 16.5957 30.7515 17.9057 30.7515 19.5219C30.7515 21.138 32.0617 22.448 33.6778 22.448Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.8453 19.1667L56.2503 11.5004C55.8996 11.4622 55.5438 11.4409 55.1828 11.4409H10.825C5.45391 11.4409 1.09863 15.7947 1.09863 21.1673V27.6044H37.8528C40.2049 24.7458 40.8173 21.0068 49.8453 19.1667Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.4089 25.7281C56.2788 26.3797 56.113 27.0044 55.9166 27.6034H64.9091V21.1663C64.9091 20.3709 64.8115 19.5986 64.6314 18.8586L56.4089 25.7281Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.2859 13.6003C69.9313 14.2398 69.455 14.8272 68.8572 15.3266L64.63 18.8584C64.81 19.5984 64.9076 20.3706 64.9076 21.166V27.6032H73.9013V21.166C73.9013 18.1091 72.4905 15.3833 70.2859 13.6003Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55.9151 27.605C53.343 35.448 45.3297 38.6858 38.1957 34.7311C35.821 33.4146 35.3606 30.179 37.272 28.2506C37.4792 28.0415 37.6711 27.8258 37.8528 27.605H1.09863V60.7532C1.09863 66.1243 5.45391 70.4796 10.825 70.4796H55.1828C60.554 70.4796 64.9078 66.1243 64.9078 60.7532V27.605H55.9151Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.8459 19.167C40.1205 21.1492 40.1619 25.3352 37.2728 28.2501C35.3615 30.1787 35.8217 33.4141 38.1964 34.7307C45.8752 38.9876 54.574 34.9123 56.4082 25.7294L49.8459 19.167Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.9139 41.6597H13.8416C11.7654 41.6597 10.0822 43.3429 10.0822 45.4192V56.4916C10.0822 58.5678 11.7654 60.251 13.8416 60.251H24.9139C26.9903 60.251 28.6735 58.5678 28.6735 56.4916V45.4192C28.6735 43.3429 26.9903 41.6597 24.9139 41.6597Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.4018 42.2483H37.5253C35.8654 42.2483 34.5198 43.5939 34.5198 45.2538C34.5198 46.9138 35.8654 48.2594 37.5253 48.2594H53.4019C55.0619 48.2594 56.4075 46.9138 56.4075 45.2538C56.4075 43.5939 55.0618 42.2483 53.4018 42.2483Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.4018 53.6514H37.5253C35.8654 53.6514 34.5198 54.997 34.5198 56.6569C34.5198 58.3169 35.8654 59.6625 37.5253 59.6625H53.4019C55.0619 59.6625 56.4075 58.3169 56.4075 56.6569C56.4075 54.9971 55.0618 53.6514 53.4018 53.6514Z"
        stroke={`${probs.selected ? "#ffffff" : "#0077FF"}`}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
