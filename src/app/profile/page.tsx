'use client';

import Image from "next/image";
import { Login } from "components/login";
import { MyPage } from "components/mypage";
import { Profile } from "components/profile";

export default function Home() {
  return (
    <main>
      <Profile/>
    </main>
  )
}