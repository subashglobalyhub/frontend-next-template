import type { Metadata } from "next";
import { RichContent } from "@/components/rich-content";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Charity",
};

const content = `
<p>On the subject of Charity (Daan):</p>
<p>Sree Shivapuri Baba said , <strong>how the world could be helped best you know</strong> ?</p>
<p>The answer from Baba always create space in the depth of heart.</p>
<p>Just read what He told,</p>
<p>“By living the Right Life. And practicing Charity in three dimensions.</p>
<p><strong>Mentally</strong>,  we should wish well even to our so called enemies.</p>
<p><strong>Speak words</strong>, never hurting others.</p>
<p><strong>When possible</strong> , try to serve physically.”</p>
<p><strong>Mahasiddha Baba further told, </strong></p>
<p>“<strong>Your income is not solely yours</strong>, society is making you <strong>comfortable </strong>to earn <strong>livelihood</strong>.</p>
<p>So, <strong>humbly devote</strong> minimum <strong>10 percent of TRUE INCOME</strong> to <strong>charity</strong>.”</p>
<p><strong>By this, your help will reach to maintain order in the world and above that ORDER in your life</strong>.”</p>
`;

export default function CharityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PageHeading>Charity</PageHeading>
      <RichContent html={content} />
    </div>
  );
}
