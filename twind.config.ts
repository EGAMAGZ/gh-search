import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme:{
    extend: {
      fontFamily: {
        'quicksand': '"Quicksand"',
        'public-sans': '"Public Sans"'
      }
    }
  },
  preflight:{
    "@font-face": [
      // Quicksand
      {
        fontFamily: "Quicksand",
        fontWeight: '300', // Light
        src: "url(/fonts/quicksand/quicksand_light.ttf) format('truetype')"
      },
      {
        fontFamily: "Quicksand",
        fontWeight: '400', // Regular
        src: "url(/fonts/quicksand/quicksand_regular.ttf) format('truetype')"
      },
      {
        fontFamily: "Quicksand",
        fontWeight: '500', // Medium
        src: "url(/fonts/quicksand/quicksand_medium.ttf) format('truetype')"
      },
      {
        fontFamily: "Quicksand",
        fontWeight: '600', // SemiBold
        src: "url(/fonts/quicksand/quicksand_semibold.ttf) format('truetype')"
      },
      {
        fontFamily: "Quicksand",
        fontWeight: '700', // Bold
        src: "url(/fonts/quicksand/quicksand_bold.ttf) format('truetype')",
      },
      // Public Sans
      {
        fontFamily: "Public Sans",
        fontWeight: '100', // Thin
        src: "url(/fonts/publicsans/publicsans_thin.ttf) format('truetype')"
      },
      {
        fontFamily: "Public Sans",
        fontWeight: '200', // ExtraLight
        src: "url(/fonts/publicsans/publicsans_extralight.ttf) format('truetype')"
      },
      {
        fontFamily: "Public Sans",
        fontWeight: '300', // Light
        src: "url(/fonts/publicsans/publicsans_light.ttf) format('truetype')"
      },
      {
        fontFamily: "Public Sans",
        fontWeight: '400', // Regular
        src: "url(/fonts/publicsans/publicsans_regular.ttf) format('truetype')"
      },
      {
        fontFamily: "Public Sans",
        fontWeight: '500', // Medium
        src: "url(/fonts/publicsans/publicsans_medium.ttf) format('truetype')"
      },
      {
        fontFamily: "Public Sans",
        fontWeight: '600', // SemiBold
        src: "url(/fonts/publicsans/publicsans_semibold.ttf) format('truetype')"
      },
      {
        fontFamily: "Public Sans",
        fontWeight: '700', // Bold
        src: "url(/fonts/publicsans/publicsans_bold.ttf) format('truetype')"
      },
      {
        fontFamily: "Public Sans",
        fontWeight: '800', // ExtraBold
        src: "url(/fonts/publicsans/publicsans_extrabold.ttf) format('truetype')"
      },
      {
        fontFamily: "Public Sans",
        fontWeight: '900', // Black
        src: "url(/fonts/publicsans/publicsans_black.ttf) format('truetype')"
      }
    ]
  }
} as Options;
