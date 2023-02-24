import React, {useState,useEffect} from "react";
import {  Divider, List,Timeline} from 'antd';

export function HSTable(commodityList){

    const [innerList,setInnerList] = useState([]);
    
    useEffect(()=> setInnerList(commodityList.datas) ,[commodityList]);
    return (
        <>        
        {innerList && innerList.length ?
            <List
                itemLayout="vertical"
                dataSource={innerList}
                renderItem={(item,idx) => {
                    return (
                        <List.Item>
                            <List.Item.Meta
                                key={`${idx}.commodity`}
                                title={
                                    <span style={{fontWeight: 'bold',textDecoration:'underline'}}>{`${(idx+1)}. ${item.commodityName.toCamelCase()}`}</span>
                                }
                            />
                            <ItemGroup item={item} parentIndex={idx} isLastItem={innerList.length >= idx}/>
                        </List.Item>);
            }}/>

            : <_/>
        }
        </>  
    );
}

/*FIX CODE NOTHING TO CHANGE (ItemGroup)*/
const ItemGroup = function({item,isLastItem,parentIndex,...props}){

    return (
        <section className="ml-8">
            <List
                itemLayout="vertical"
                dataSource={item.list}
                renderItem={data=>{
                    
                    let temp = data.group.group;
                    const groupName =temp.slice(0,2) + '.'+temp.slice(2);
                    return (
                        <List.Item>
                            <List.Item.Meta
                                //key={data.group.code}
                                title={groupName}
                                description={data.group.description}
                            />

                            <ItemSpecification item={data.list} parentIndex={parentIndex}/>
                        </List.Item>
                    );
                }}
            />
            {isLastItem? '': <Divider/>}
        </section>
    );
}

/*FIX CODE NOTHING TO CHANGE (ItemSpecification)*/
const ItemSpecification = function({item,parentIndex,...props}){

    const section = item?.map((data,idx)=>{
        
        const temp = data.specification;
        const specName =temp.slice(0,4) + '.'+temp.slice(4);

        return (
            <Timeline.Item key={`${parentIndex}.${idx}`}>
                <div>{specName}</div>
                <div>{data.description}</div>
            </Timeline.Item>

        );
    });

    return (
        <>
            <Timeline>
                {section}
            </Timeline>
        </>
    );
}

/*FIX CODE NOTHING TO CHANGE (_)*/
const _ = function(){
    return (
        <section>
            <div className="py-6 flex flex-col justify-center sm:py-10">
               <span>{atob('T29vcHMhISBzb21ldGhpbmcgd2VudCB3cm9uZw==')}</span>
            </div>
        </section>
    );
}