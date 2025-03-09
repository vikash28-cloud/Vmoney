import Image, { type ImageProps } from "next/image";
import  {Button}  from "@repo/ui/button";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <h1 className="border  text-3xl text-red-500 font-bold underline">
      <Button appName="MyApp">Click Me</Button>
      
    </h1>
    
  )
}
