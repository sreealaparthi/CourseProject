import Menu from "antd/lib/menu"
import icons from "antd/es/icon"

const {  AppstoreOutlined, MailOutlined, SettingOutlined  } = icons;

function ProjectMenu() {
    const {SubMenu} = Menu;
    //const {AppstoreOutlined, MailOutlined, SettingOutlined} = icons;
    return (
        <Menu
            // onClick={() => {
            // }}
            style={{width: 256}}
            defaultSelectedKeys={['Lesson 1.1 Natural Language Content Analysis']}
            defaultOpenKeys={['Text Information Systems']}
            mode="inline"
        >
            <SubMenu key="Text Information Systems" icon={<MailOutlined/>} title="Navigation One">
                <Menu.ItemGroup key="g1" title="textretrieval">
                    <Menu.Item key="Lesson 1.1 Natural Language Content Analysis">Lesson 1.1 Natural Language Content
                        Analysis</Menu.Item>
                    <Menu.Item key="Lesson 1.2 Text Access">Lesson 1.2 Text Access</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="textanalytics">
                    <Menu.Item key="7.1 Overview Text Mining and Analytics - Part 1">7.1 Overview Text Mining and
                        Analytics
                        - Part 1</Menu.Item>
                    <Menu.Item key="7.2 Overview Text Mining and Analytics - Part 2.mp4">7.2 Overview Text Mining and
                        Analytics - Part 2</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>)
}

export default ProjectMenu;