import { WrappedData } from "../utils/data";
import $ from "@/utils/theme";
import React from "react";
import slides from "../slides";
import Stories from 'react-insta-stories';
import { Action, Story } from "react-insta-stories/dist/interfaces";


export interface SlideProps {
  data: WrappedData;
}

export interface OptionalSlideOptions {
  bg?: string;
}

export type WrappedSlide = ((props: SlideProps) => JSX.Element) & OptionalSlideOptions;


export default function Slides({ data }: { data: WrappedData }) {
  console.log("HERE!", React);
  debugger;
  const [slide, setSlide] = React.useState(0);

  const CurrentSlide = slides[slide];

  return (
    // <CurrentSlide
    //   data={data}
    //   Continue={function () {
    //     return <>hi</>
    //   }}
    // />

		<Stories
      stories={slides.map((Slide: WrappedSlide) => ({
        content: ({ action, isPaused, config }) => (
          <div style={{
            background: Slide.bg || "white",
            width: "100%",
            height: "100%",
          }}>
            <Slide data={data} />
          </div>
        )
      }))}
      defaultInterval={3_000}
      width={432}
      height={768}
    />
  );
}
