import Image from "next/image";

import classes from "./EventDetail.module.css";

function EventDetail(props) {
  return (
    <main className={classes["detail-wrapper"]}>
      <section className={classes.heading}>
        <h1>Programming for everyone</h1>
      </section>
      <section >
        <div className={classes.detail}>
          <div className={classes['detail-left']}>
            <Image src="/assets/pro.jpg" width="180" height="180" /> 
          </div>
          <div className={classes['detail-right']}>
            <span className={classes["date"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                viewBox="0 0 20 22"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#06a97d"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  transform="translate(1 1)"
                >
                  <rect width="18" height="18" y="2" rx="2" />
                  <path d="M13 0v4M5 0v4M0 8h18" />
                </g>
              </svg>
              May 12, 2021
            </span>
            <div className={classes["address"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                viewBox="0 0 32 32"
                fill="#06a97d"
              >
                <g data-name="Layer 2">
                  <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z" />
                  <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z" />
                </g>
              </svg>
              <address>
                <span>Somestreet 25</span>
                <span>12345 San Somewhereo</span>
              </address>
            </div>
          </div>
        </div>

        <p>
          Everyone can learn to code! Yes, everyone! In this live event, we are
          going to go through all the key basics and get you started with
          programming as well.
        </p>
      </section>
    </main>
  );
}

export default EventDetail;
