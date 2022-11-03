import { Tabs } from 'antd';
import styles from '../../styles/Stories.module.scss';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faBookOpen, faFilm, faVideo } from '@fortawesome/free-solid-svg-icons';

const tabStyle = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
}

const tab1 = <div style={tabStyle}>
                <FontAwesomeIcon style={{width: "20px"}} icon={faBookOpen}/>
                <span> &nbsp; Stories</span>
            </div>

const tab2 = <div style={tabStyle}>
                <FontAwesomeIcon style={{width: "20px"}} icon={faFilm}/>
                <span>&nbsp; Reels</span>
            </div>

const tab3 = <div style={tabStyle}>
                <FontAwesomeIcon style={{width: "20px"}} icon={faVideo}/>
                <span>&nbsp; Rooms</span>
            </div>


export default function Stories () {

    return (
        <div className={styles.stories}>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab={tab1} key="1">
                    Content of Stories
                </Tabs.TabPane>
                <Tabs.TabPane tab={tab2} key="2">
                    Content of Reels
                </Tabs.TabPane>
                <Tabs.TabPane tab={tab3} key="3">
                    Content of Rooms
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}