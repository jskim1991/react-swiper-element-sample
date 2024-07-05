import SomeComponent from "./SomeComponent";
import styles from "./App.module.css";
// import "swiper/swiper-bundle.css";
import "./CustomSwiper.css";

import { register } from "swiper/element/bundle";
import { useEffect, useState } from "react";

register();

const LENGTH = 7;
const OFFSET = 4;
const DATA = Array.from({ length: LENGTH }).map((_, i) => i + 1);

function App() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Math.max(Math.ceil(LENGTH / OFFSET), 1));
  }, [DATA]);

  return (
    <main className={styles.container}>
      <h1>Swiper Element Demo</h1>

      {total > 0 && (
        <swiper-container
          pagination={true}
          pagination-clickable={true}
          autoplay-delay={2500}
          // autoplay-disable-on-interaction={true}
          loop={true}
          slides-per-view={1}
        >
          {[...Array(total)].map((_, idx) => {
            return (
              <swiper-slide>
                <div className={styles.rows}>
                  {DATA.slice(idx * OFFSET, idx * OFFSET + OFFSET).map(
                    (num) => {
                      return <SomeComponent key={num} id={num} />;
                    },
                  )}
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      )}
    </main>
  );
}

export default App;
