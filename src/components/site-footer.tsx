export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm leading-relaxed text-muted-foreground sm:px-6">
        <p>
          &copy; 2017 All rights reserved. No parts of this website containing text, image and book
          which includes the pictures and photographs may be reproduced, stored in retrieval system
          or transmitted, in any form or by any means, electronic, mechanical, photocopying,
          recording or otherwise without the written permission from the author except for brief
          passages quoted in review or critical articles.
          <br />
          Bishnu Prasad Timilsina
          {" | Site by : "}
          <a
            href="http://sobiztrend.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline"
          >
            SobizTrend
          </a>
        </p>
      </div>
    </footer>
  );
}
