import React, {useState,useEffect} from "react";
import { Layout, Menu  } from 'antd';
import { useRequestRecommendations } from "../../utils/actions/dashboard";
import { HSTable } from "../../components/hstable";
import HakovoLogo from "../../assets/hakovo_logo.jpg"
import { MailOutlined } from "@ant-design/icons";

const { Content, Header } = Layout;

// localStorage.setItem("recommendations_data",JSON.stringify({}));

export default function Dashboard(){

    const [commodityList,setCommodityList] = useState([]);
	const [requestRecommendations] = useRequestRecommendations();
    const menus = [1, 2, 3, 4]

    useEffect(()=> handleFindRecommendations('linen') ,[]);

    const handleFindRecommendations = (text) =>{
        const formData = new FormData();
        formData.append('text',text);

        requestRecommendations(formData);
        
        var result = JSON.parse(localStorage.getItem("recommendations_data"));
        if(result) setCommodityList(result);        
    }
    
    return (
        <Layout style={{backgroundColor:'#fff'}}>
            <Header style={{display: 'flex'}}>
                <div className="logo" style={{marginTop: 20}}><img src={HakovoLogo}/></div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    {
                        menus.map((_ ,i) => {
                            return(
                                <>
                                    <Menu.Item key={i+1}>Menu {i+1}</Menu.Item>
                                </>
                            )
                        })
                    }
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <HSTable datas={commodityList}/>
                </div>
            </Content>
        </Layout>
    );
}