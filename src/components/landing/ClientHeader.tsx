"use client";

import Header from "./Header";
import { ComponentProps } from "@/types";

type ClientHeaderProps = ComponentProps;

export default function ClientHeader(props: ClientHeaderProps) {
  return <Header {...props} />;
}