/* worker.js */
// declare var self: ;
import InspireTreeOuter, { InspireTree, NodeConfig, TreeNode, } from "inspire-tree";



interface IInpireItem extends NodeConfig {
    EID: number;
};

var counter = 0;
const createItem = (text: string) => {
    return <IInpireItem>{
        EID: counter++,
        text
    };
};

const addChild = (item: NodeConfig, child: NodeConfig) => {
    if (item.children === true) { return; }
    item.children = item.children || [];
    item.children.push(child);

}







// Receive message from main file
self.onmessage = function (e) {
    console.log(e.data);
    if(e.data != "go"){return;}


    var item = createItem("selam");
    addChild(item, createItem("child1"));
    addChild(item, createItem("child2"));

    return {type:"add", item: item, path: [0, 2, 3]};

    // const tree = new InspireTreeOuter({
    //     data: [item]
    // });

    self.postMessage(item);
}