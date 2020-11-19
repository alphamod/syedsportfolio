/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import styles from "./skills.module.css";

import htmlUrl from "./skill-icons/html5.png"
import css3 from "./skill-icons/css3.png"
import bootstrapUrl from "./skill-icons/bootstrap.png"
import javascriptUrl from "./skill-icons/javascript.png"
import reactUrl from "./skill-icons/react.png"
import angularUrl from "./skill-icons/angular.png"
import reduxUrl from "./skill-icons/redux.png"
import nodeUrl from "./skill-icons/node-js.png"
import expressUrl from "./skill-icons/express.png"
import mongoUrl from "./skill-icons/mongodb.png"
import mysqlUrl from "./skill-icons/mysql.png"
import socketUrl from "./skill-icons/socketio.png"
import jwtUrl from "./skill-icons/jwt.png"
import pythonUrl from "./skill-icons/python.png"

const Skills = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <SVG icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h1 sx={{ fontSize: [7, 8] }}>Skills</h1>
        <div className={styles.parDiv}>
        <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${htmlUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>HTML 5</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${css3}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>CSS 3</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${bootstrapUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>Bootstrap 4</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${javascriptUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>JavaScript</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${reactUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>React.js</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${angularUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>Angular</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${nodeUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>Node.js</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${expressUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>Express.js</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${mongoUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>MongoDB</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${reduxUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>Redux</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${socketUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>Socket.io</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${mysqlUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>MySQL</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${jwtUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>JWT</span>
          </div>
          </div>

          <div className={styles.flip}>
          <div className={styles.front}>
            <div sx={{
              background: `url(${pythonUrl}) center no-repeat`,
              height: "100%",
              width: "auto"
            }}></div>
          </div>
          <div className={styles.back}>
            <span>Python</span>
          </div>
          </div>

          
          </div>
      </Inner>
    </Content>
  </div>
)

export default Skills;