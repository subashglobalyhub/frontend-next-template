import type { Metadata } from "next";
import { RichContent } from "@/components/rich-content";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Contact",
};

const content = `
<p><strong>Samadhi Mandir ::</strong></p>
<p>Opening Time: 6:00 AM<br/>
Closing Time: 5:00 PM</p>
<p><strong>Location</strong> :<br/>
Kathmandu, Nepal near Pashupatinath Temple<br/>
( 5 minutes walking from Golf Play Ground, Tilganga, Kathmandu. Nepal)</p>
<p><strong>Contact Person</strong> :</p>
<p>Shri Shiva Prasad Timilsina (<a href="tel:9841811715">9841811715</a>)<br/>
Shri Bishnu Prasad Timilsina (<a href="tel:9741045937">9741045937</a>, <a href="tel:97714484785">977-1-4484785/4470953</a>)</p>
<p>Shri Madhusudan Prasad Timilsina (<a href="tel:9751001948">9751001948</a>)</p>
<p>email: <a href="mailto:info@shivapuribaba.com">info@shivapuribaba.com</a>/<a href="mailto:swadharma1963@gmail.com">swadharma1963@gmail.com</a></p>
<p><strong>Regarding books you can contact Bishnu Prasad Timilsina in <a href="tel:9741045937">9741045937</a>.</strong></p>
<p><strong>How to contact ::</strong><br/>
Whosoever wants to visit Samadhi Mandir, they first need to contact one of THREE BROTHERS through mail if necessary. We will feel glad to answer such queries.</p>
`;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PageHeading>Contact</PageHeading>
      <RichContent html={content} />
    </div>
  );
}
