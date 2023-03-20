import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import MultiSelectList from "@/components/OptionList/multiSelectList";
import SelectedCard from "@/components/selectedCard";
import NotFound from "@/components/notFound";
import PostCard from "@/components/postCard";

export default function Study() {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const router = useRouter();

  const onCreatePostClicked = () => {
    router.push("/createPost");
  };

  const renderSelectedLocations = selectedLocations.map((title, index) => {
    return (
      <SelectedCard
        key={index}
        title={title}
        selectedOptions={selectedLocations}
        setSelectedOption={setSelectedLocations}
      />
    );
  });

  const renderSelectedFields = selectedFields.map((title, index) => {
    return (
      <SelectedCard
        key={index}
        title={title}
        selectedOptions={selectedFields}
        setSelectedOption={setSelectedFields}
      />
    );
  });

  const renderArticles = 게시물_테스트_데이터.map((post) => {
    return (
      <PostCard
        key={post.postId}
        postId={post.postId}
        status={post.status}
        type={post.type}
        field={post.field}
        title={post.title}
        location={post.location}
        skills={post.skills}
        likes={post.likes}
        hasImg={post.hasImg}
      />
    );
  });

  return (
    <>
      <Head>
        <title>CoderHive</title>
        <meta name="description" content="CoderHive : Find your co-coder!" />
      </Head>
      <div className="bg-white py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              스터디
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              함께 공부하고 성장해갈 스터디를 찾아보세요
            </p>
            <div className="mt-8 flex">
              <MultiSelectList
                title="지역"
                options={지역_테스트_데이터}
                selectedOptions={selectedLocations}
                setSelectedOption={setSelectedLocations}
              />
              <MultiSelectList
                title="분야"
                options={분야_테스트_데이터}
                selectedOptions={selectedFields}
                setSelectedOption={setSelectedFields}
              />
            </div>
            <div className="my-4 min-h-[2.4rem] flex flex-wrap">
              {renderSelectedLocations}
              {renderSelectedFields}
            </div>
          </div>
          <div className="flex flex-col pt-6 border-t border-gray-200 ">
            <button
              className="ml-auto px-6 py-2.5 text-sm font-semibold text-white rounded-md bg-indigo-600
                max-sm:ml-0 hover:bg-indigo-500 transition-all ease-in duration-100"
              onClick={onCreatePostClicked}
            >
              새 모임 생성
            </button>
            {renderArticles.length === 0 ? (
              <NotFound />
            ) : (
              <div
                className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 mt-6
                  sm:grid-cols-2 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
              >
                {renderArticles}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

let 지역_테스트_데이터 = [
  "서울특별시",
  "인천광역시",
  "대전광역시",
  "부산광역시",
];
let 분야_테스트_데이터 = ["UI/UX", "웹프론트엔드", "웹서버"];

interface 테스트_게시물_인터페이스 {
  postId: string;
  type: string;
  status: string;
  field: string;
  title: string;
  location: string;
  skills: string[];
  likes: number;
}

let 빈게시물_테스트_데이터: 테스트_게시물_인터페이스[] = [];
let 게시물_테스트_데이터 = [
  {
    postId: "1",
    type: "스터디",
    status: "모집중",
    field: "프론트엔드 개발",
    title: "프론트엔드 개발자 구함!",
    location: "서울 / 경기",
    skills: ["HTML5", "Tailwind", "NextJS", "TypeScript", "GitHub"],
    likes: 1,
    hasImg: true,
  },
  {
    postId: "2",
    type: "스터디",
    status: "모집중",
    field: "프론트엔드 개발",
    title: "자바스크립트 개념부터 다지실분 구함",
    location: "서울 / 경기",
    skills: ["HTML5", "JavaScript"],
    likes: 3,
    hasImg: false,
  },
  {
    postId: "3",
    type: "스터디",
    status: "모집완료",
    field: "디자인&UX 스터디&네트워킹",
    title: "UIUX 포트폴리오 같이 만들어요",
    location: "서울",
    skills: ["Figma"],
    likes: 12,
    hasImg: true,
  },
  {
    postId: "4",
    type: "스터디",
    status: "모집중",
    field: "백엔드 개발",
    title: "개발 스터디 모집",
    location: "온라인 / 서울",
    skills: ["Flutter", "Python", "JavaScript", "TypeScript", "Django"],
    likes: 100,
    hasImg: false,
  },
  {
    postId: "5",
    type: "스터디",
    status: "모집완료",
    field: "기획 & PO",
    title: "SaaS LMS 기획",
    location: "서울 / 경기",
    skills: ["LMS", "SaaS"],
    likes: 0,
    hasImg: true,
  },
];