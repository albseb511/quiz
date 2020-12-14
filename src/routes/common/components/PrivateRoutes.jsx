import { Menu, Layout } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, useHistory } from 'react-router-dom';
import { HomeOutlined, TagsOutlined, SettingOutlined,FileAddOutlined, SearchOutlined } from '@ant-design/icons';
import { makeStyles } from '@material-ui/styles';

const { Header, Content, Footer, Sider } = Layout;

const width = 80;

const useStyles = makeStyles({
    root:{
        padding:50
    },
    menu:{
        width: width,
    }
})

const links = [
    {
        key: 'home',
        icon: <HomeOutlined/>,
        title: "HOME",
        path: "/"
    },
    {
        key: 'search',
        icon: <SettingOutlined/>,
        title: "SEARCH",
        path: "/search"
    },
    {
        key: 'add-question',
        icon: <FileAddOutlined/>,
        title: "ADD QUESTION",
        path: "/add-question"
    },
    {
        key: 'tags',
        icon: <TagsOutlined/>,
        title: "TAGS",
        path: "/tags"
    },
    {
        key: 'user',
        icon: <SettingOutlined/>,
        title: "USER",
        path: "/user"
    },
]


const PrivateRoutes = ({path, exact, children}) => {
    const isAuth = useSelector(state=>state.auth.isAuth);
    const loading = useSelector(state=>state.auth.loading);
    const classes = useStyles();
    const history = useHistory();
    if(loading){
        return <div>...loading</div>
    }

    if(!isAuth){
        return <Redirect to="/login" />
    }

    const handleMenuClick = (path) => {
        history.push(path)
    }

    return (
        <>
        <Layout style={{height: '100vh'}}>
            <Sider collapsed={true} collapsedWidth={width}>
                <Menu className={classes.menu} mode="inline" >
                    {
                        links.map(item=>(
                            <Menu.Item onClick={()=>handleMenuClick(item.path)} key={item.key} icon={item.icon}>
                                {item.title}
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout>
                <Content style={{overflow:'auto'}}>
                    <Route path={path} exact={exact} >
                        {children}
                    </Route>
                </Content>
            </Layout>
        </Layout>
        </>
    )
}

export {PrivateRoutes}
