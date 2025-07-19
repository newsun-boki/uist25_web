"use client";

import React from "react";
import Link from "next/link";
import VideoComparisonCarousel from "../components/VideoComparisonCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50/30">
      {/* 标题部分 */}
      <header className="relative py-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-orange-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-sky-950 mb-6 tracking-tight leading-tight">
              <span className="text-orange-500">Video</span>
              <span className="text-blue-500">Craft</span>: A Mixed
              Reality-Empowered Video Generation Workflow with Spatial Layer
              Editing for Concept Video Creation
            </h1>
            <div className="space-y-6">
              <div className="text-xl text-sky-800">
                <p className="mb-2">
                  Boyu Li<sup>1</sup>, Linping Yuan<sup>2</sup>, Zeyu Wang
                  <sup>1,2</sup>
                </p>
                <div className="space-y-1 text-lg text-sky-700">
                  <p>
                    The Hong Kong University of Science and Technology
                    (Guangzhou)<sup>1</sup>
                  </p>
                  <p>
                    The Hong Kong University of Science and Technology
                    <sup>2</sup>
                  </p>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center text-sky-900">
                UIST 2025
              </h2>
            </div>
          </div>
          {/* 链接部分 */}
          <section className="py-4 border-b border-sky-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="https://doi.org/10.1145/3746059.3747606"
                  className="group px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-sky-200"
                >
                  <span>DOI</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=uvozXgniRok"
                  className="group px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <span>Demo</span>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1OMZ9TH9jdr4_FqN1pL4Y8VTO1_FVd7xh/view?usp=sharing"
                  className="group px-6 py-2 bg-red-500/90 text-white rounded-full hover:bg-red-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-200"
                >
                  <span>PDF</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </header>

      {/* 视频对比展示 */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <VideoComparisonCarousel
            items={[
              {
                beforeVideo: "/videos/space1.mp4",
                afterVideo: "/videos/space0.mp4",
                title: "Space Restructing",
                className: "mb-8",
                extraImage: "/images/space.png",
              },
              {
                beforeVideo: "/videos/surface0.mp4",
                afterVideo: "/videos/surface1.mp4",
                title: "Surface Augmentation",
                className: "mb-8",
                extraImage: "/images/surface.png",
              },
              {
                beforeVideo: "/videos/spatial0.mp4",
                afterVideo: "/videos/spatial1.mp4",
                title: "Spatial Overlay",
                className: "mb-8",
                extraImage: "/images/spatial.png",
              },
              {
                beforeVideo: "/videos/transitional0.mp4",
                afterVideo: "/videos/transitional1.mp4",
                title: "Transitional Boundary",
                className: "mb-8",
                extraImage: "/images/transitional.png",
              },
              {
                beforeVideo: "/videos/dynamic0.mp4",
                afterVideo: "/videos/dynamic1.mp4",
                title: "Dynamic State",
                className: "mb-8",
                extraImage: "/images/dynamic.png",
              },
              {
                beforeVideo: "/videos/fire0.mp4",
                afterVideo: "/videos/fire1.mp4",
                title: "Dynamic State",
                className: "mb-8",
                extraImage: "/images/fire.png",
              },
            ]}
          />
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-8">
        <div className="bg-white rounded-lg border border-sky-200 shadow-[0_0_20px_rgba(186,230,253,0.2)] p-4 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-sky-800 text-center mb-6">
            Motivation: MR + V2V
          </h3>
          <div className="flex gap-4 w-full max-w-full overflow-x-auto">
            {/* 第一列：两张1:1图片，最大宽度230px */}
            <div className="flex flex-col gap-4 flex-shrink-0 max-w-[230px] w-full">
              <div className="h-[230px]">
                <div className="aspect-square h-full">
                  <img
                    src="/motivation/v2v1.png"
                    alt="V2V 示意图"
                    className="w-full h-full object-contain bg-white rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="h-[230px]">
                <div className="aspect-square h-full">
                  <img
                    src="/motivation/mrv2v.png"
                    alt="MR+V2V 示意图"
                    className="w-full h-full object-contain bg-white rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* 第二列：两段视频，自适应 */}
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <div className="h-[230px]">
                <div className="aspect-[16/9] h-full">
                  <video
                    src="/motivation/maopi.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="h-[230px]">
                <div className="aspect-[16/9] h-full">
                  <video
                    src="/motivation/maopi_MR.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            {/* 第三列：两段视频，自适应 */}
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <div className="h-[230px]">
                <div className="h-[230px] aspect-[16/9] h-full">
                  <video
                    src="/motivation/generation1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="h-[230px]">
                <div className="aspect-[16/9] h-full">
                  <video
                    src="/motivation/generation2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-base text-sky-700 text-center mt-4">
            Motivated by the advantages of MR and V2V models, we envision a
            workflow that first uses MR to edit and capture mixed-reality
            footage, which then serves as input for V2V models to automatically
            refine and enhance the content.
          </p>
        </div>
      </section>

      {/* Spatial Layer 机制介绍 */}
      <section className="py-8">
        <div className="bg-white rounded-lg border border-sky-200 shadow-[0_0_20px_rgba(186,230,253,0.2)] p-4 max-w-5xl mx-auto flex flex-col items-center">
          <p className="text-3xl font-bold text-sky-800 text-center mb-2">
            Localized Editing with Spatial Layer
          </p>
          <img
            src="/images/design_space.png"
            alt="Spatial Layer "
            className="w-full rounded-lg"
            loading="lazy"
          />

          <p className="text-base text-sky-700 mt-2 text-center">
            The <span className="font-bold text-sky-800">spatial layer</span>,
            created within the{" "}
            <span className="font-bold text-orange-600">MR environment</span>,
            serves as a guide for{" "}
            <span className="font-bold text-blue-600">localized editing</span>{" "}
            in the{" "}
            <span className="font-bold text-sky-800">
              generated concept video
            </span>
            .
          </p>
        </div>
      </section>

      {/* 页脚前的YouTube视频展示 */}
      <section className="py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h3 className="text-3xl font-semibold mb-4 text-sky-800 text-center">
            Video
          </h3>
          <div className="w-full max-w-5xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg border"
              src="https://www.youtube.com/embed/uvozXgniRok"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 bg-gradient-to-r from-sky-50 to-orange-50">
        <div className="container mx-auto px-4 text-center text-sky-700">
          <p>
            © 2024 The Hong Kong University of Science and Technology
            (Guangzhou). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
