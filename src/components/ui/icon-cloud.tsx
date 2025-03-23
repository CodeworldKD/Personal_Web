'use client';

import { ICloud } from "react-icon-cloud";
import dynamic from 'next/dynamic';

// 定义云属性
export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

// 定义组件Props类型
export type DynamicCloudProps = {
  iconSlugs: string[];
};

// 动态导入实现组件，禁用SSR渲染
const DynamicIconCloud = dynamic(
  () => import('./icon-cloud-impl'), 
  { ssr: false }
);

// 导出主组件
export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  return <DynamicIconCloud iconSlugs={iconSlugs} />;
}