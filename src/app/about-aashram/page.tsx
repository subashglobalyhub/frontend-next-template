import type { Metadata } from "next";
import { RichContent } from "@/components/rich-content";

export const metadata: Metadata = {
  title: "About Samadhi Mandir",
};

const content = `
<p>On January 28, 1963 approximately at around 06.00 AM Baba called me (author of book SWADHARMA, Shri Bishnu Prasad Timilsina) to give him a glass of water. I served him the glass of water but could not place at his palms correctly at it was quite dark. Baba told me, “How long have you been serving me, can’t you learn how to be alert and attentive after all this while. “That was the last word Baba ever spoke in this earth to me in his physical body and Baba took his Maha Samadhi right after that. My father Madhav and few other devotees were beside him on this day of misfortune for all of us.</p>
<p>Baba’s health was already deteriorating from January 25, 1963 pneumonia attacked Baba. Doctors tried their best but Baba gave no importance to the treatment and simply watched the situation. He even took a bath as usual and continued meeting people until his last day. His face was bright as usual. The wooden kuti, where Baba took his last breath, was built in an around 1949 and was also installed in Shivapuri Hill. It was a mobile structure designed in a way that it can be dismantled and fixed back as and when necessary. It is made of Champaka tree. When Baba returned to Dhruvasthali, it was brought to the present Samadhi Mandir. We can see some remnants in Shivapuri Hill where Baba’s wooden hut was. In the rainy season, Baba used to stay inside the hermitage and enjoy the rainfall from his window. Before constructing the brick wall, the present Samadhi Mandir was fenced by mesh wire with straw roof. Now, the wooden hut is outside the south of Samadhi Mandir.</p>
<p>He rested his head upon both the palm in Namaskar Mudra. He always used to keep his head towards the North. He was in the same posture until the last moment. The same day, Swamy Prakashananda, the Chief of Prakash Sanyash Ashram near Tribhuvan International Airport, as well as several other saints of various sects assembled to have farewell Darshan to Baba’s holy body. Baba’s holy body was laid to rest on a mat with Padmaasana posture facing towards the West and then shifted to the four feet depth pit and erected Baba’s Samadhi with a four-faced Shiva Linga.</p>
<p>A marble stone replica is erected in Samadhi with Baba’s teachings and</p>
<p>a similar Sloka from Bharthruhari’s Vairagya Satakam::</p>
<p style="text-align: center;"><strong>Bhu Paryanko Nija Bhuja Lata, </strong></p>
<p style="text-align: center;"><strong>Kanduka Kham Vitanam. </strong></p>
<p style="text-align: center;"><strong>Deepachandro Virati Vanita Labdha Sanga Pramoda. </strong></p>
<p style="text-align: center;"><strong>Dik Kantavhi Pawana Chamarair Virgya Mana Samantad.</strong></p>
<p style="text-align: center;"><strong> Vhikshu Sete Nripa Iba Bhuwi Tyakta Sarwa Sprihopi.</strong></p>
<p>(A contented saint, who is prone to take this earth for his fine sofa; his creeper like arms for ample pillows, the endless sky for his canopy, a favorable breeze for his fan, the refulgent moon for his lamp, and total the difference to world for his loving wife, always sleeps with as much ease and comfort as a great monarch of enormous wealth and power.) Thus, the Shivapuri Baba, who landed in this earth as Shree Govinda, in the southern India completed his Long Pilgrimage as Shivapuri Baba in Dhruvasthali, in the centre of Sleshmantaka forest of Nepal.</p>
<p>Baba’s wish for his devotees is</p>
<p><strong>सच्चा चलन से चलना, ईश्वरका भक्ति करना ।</strong></p>
<p>This is my last life. You will need a Guru’s guidance until you attain success in your Sadhana.</p>
<p><strong>Live Right Life, Worship God. That is all, Nothing more.</strong></p>
<p style="text-align: center;">x x x</p>
`;

export default function AboutAashramPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://web.archive.org/web/20190715142422im_/http://www.shivapuribaba.org/wp-content/uploads/2017/06/baba-samadhi-temple-690x450.jpg"
        alt="Shiva Puri Baba Samadhi Temple"
        className="mb-8 aspect-[16/9] w-full rounded-2xl border border-border object-cover shadow-sm"
      />
      <h1 className="mb-8 text-3xl font-semibold text-foreground">About Samadhi Mandir</h1>
      <RichContent html={content} />
    </div>
  );
}
