import React, { forwardRef } from "react";
import "./Home.css";
import { motion } from "framer-motion";
function Home({}, refhome) {
  return (
    <div ref={refhome} className="home">
      <motion.div initial={{
          y:"300px",
        }} whileInView={{y:0,transition: {
          type: "spring",
          bounce: 0.6,
          duration:1.5
        }}}  className="hContainer">
        <div className="cards row">
          <motion.div  className="card row">
            <div className="card-body">
              <div className="htitle">
                <h2 className="hTitles">Alpha</h2>
              </div>
              <p className="hP">
                The Xiaomi Mi Mix Alpha was launched on 24th September 2019. The
                phone has a 7.92-inch (2088x2250) Flexible OLED display, a
                Qualcomm Snapdragon 855+ processor, 12GB of RAM, 512GB of
                storage, and a 4050 mAh battery. It runs on MIUI 11 (Android
                10).
              </p>
            </div>
          </motion.div>
          <div className="card row">
            <div className="card-body">
              <div className="htitle">
                <h2 className="hTitles">15 Pro</h2>
              </div>
              <p className="hP">
                6.7" Super Retina XDR display, 120Hz refresh rate A17 Pro chip
                48MP main camera, 12MP ultrawide camera, 12MP front-facing
                camera Up to 4K video recording at 24fps, 30fps, or 60fps 256GB,
                512GB, or 1TB storage Up to 25 hours of video playback iOS 17
                Starts at $1,199
              </p>
            </div>
          </div>
          <div className="card row">
            <div className="card-body">
              <div className="htitle">
                <h2 className="hTitles">Ultra</h2>
              </div>
              <p className="hP">
                6.8" Dynamic AMOLED 2X display, 120Hz refresh rate, 1440 x 3088
                pixels resolution, HDR10+ support Qualcomm Snapdragon 8 Gen 3
                processor, octa-core, Adreno 730 GPU 200MP main camera, 12MP
                ultrawide camera, 10MP telephoto camera, 12MP front-facing
                camera 12GB of RAM, 256GB, 512GB, or 1TB of storage 5000mAh
                battery, 65W fast wired charging, 15W fast wireless charging
                Android 14 S-Pen support, IP68 water and dust resistance,
                ultrasonic fingerprint sensor Expected to start at $1,199
              </p>
            </div>
          </div>
          <div className="card row">
            <div className="card-body">
              <div className="htitle">
                <h2 className="hTitles">Ipad</h2>
              </div>
              <p className="hP">
                12.9-inch Liquid Retina XDR display Apple M2 chip Dual-camera
                system Four-speaker system Up to 10 hours of video playback
                Wi-Fi 6, 5G, Bluetooth 5.3 Thunderbolt 4 port Face ID LiDAR
                Scanner Starts at $1,099
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default forwardRef(Home);
