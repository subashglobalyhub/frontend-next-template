import type { Metadata } from "next";
import { RichContent } from "@/components/rich-content";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "About Mahasiddha Purusha Shree Shivapuri Baba",
};

const content = `
<p>Shivapuri Baba was a God Realized Saint. He landed on this planet in 1826. (corresponding to Bikram Sambat 1883, Bhadra Mul Nakshtra). He was born in Nambudari Family, Malabar, Kerala, South India .</p>
<p>He smiled at his first breath on the earth.His grandfather was an astrologer and had once forecasted that the family lineage will come to an end . He was born as a twin along with her sister. Baba was looked after by his grandfather and grandmother as his parents died during his early childhood. Grandmother most often used to tell him stories before going to bed.</p>
<p>Baba mastered all four vedas (Sama Veda, Yajur Veda, Atharba Veda, Dhanur Veda) at his early stage of 14.</p>
<p>Baba was accompanied by his grandfather Achyutam in Amar Kantaka Forest, near Narmada, Madhya Pradesh, India for the quest of the Truth.</p>
<p>He stayed nearly 20 years in the deep forest and realized God. He remarked his God Realization experience in his own words as “God came in a flash. All the problems were solved”.</p>
<p>After the demise of Grandfather, he came out of the forest and initiated Sannyas at Sringeri Math. Sringeri Math was established by First Shankaracharya (Adi Shankaracharya). After initiation, he was named Govindananda Bharati.</p>
<h4><strong>SHIVAPURI BABA NEPAL PILGRIMAGE</strong></h4>
<p>Firstly, Baba came to Nepal along with his grandfather, at the time of Kot Parba (at the time of Massacre, in which several innocent civil servants and politicians were killed). He returned immediately after visiting Pashupatinath Temple and Guhyakali Shaktipeetha.</p>
<p>Secondly, he entered Nepal from the east. He stayed in the Pashupatinath area and adjoining places like Gokarana, Kiranteshwar, Godawari etc. He stayed few years in Shivapuri Hill, which lies in the northern side of Katmandu. After his stay in Shivapuri Hill, the then ‘Govindananda Bharati’ was called in Nepal and the world as The Shivapuri Baba.</p>
<p>He passed about 37 years in Nepal. He left this planet on January 28, 1963 at his forest retreat (Kuti) in Dhruvasthali towards east of  Pashupatinath temple.</p>
`;

export default function AboutShivapuriBabaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://web.archive.org/web/20190715142422im_/http://www.shivapuribaba.org/wp-content/uploads/2017/06/ShivapuriBaba1.jpg"
        alt="Shiva Puri Baba"
        className="animate-in fade-in-0 mb-10 aspect-[16/9] w-full rounded-2xl border border-border object-cover shadow-sm duration-700"
      />
      <PageHeading>About Mahasiddha Purusha Shree Shivapuri Baba</PageHeading>
      <RichContent html={content} />
    </div>
  );
}
