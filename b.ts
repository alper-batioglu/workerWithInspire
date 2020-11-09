import InspireTreeOuter, { InspireTree, NodeConfig, TreeNode, } from "inspire-tree";
import InspireTreeDOM from "inspire-tree-dom";


var div = document.createElement("div");
div.id = "alper";
div.classList.add("tree");
document.body.appendChild(div);


const myWorker = new Worker('./dist/worker/worker.js');
const tree = new InspireTreeOuter({
    data: []
});
debugger;

new InspireTreeDOM(tree, {
    target: div,
    dragAndDrop: {
        enabled: true,
        validateOn: undefined,
        validate: (dragNode, targetNode) => true
    }
});
myWorker.onmessage = mes => {

    const item = JSON.parse(JSON.stringify(mes.data));
    tree.addNode(mes.data);
    var a= {x:5, y:6, z:"sdsadas"};
    myWorker.postMessage(a);
    setTimeout(() => {
        tree.get(0).getChildren().addNode(item);
        
    }, 3000);
    setTimeout(() => tree.get(0).getChildren().get(0).remove(), 6000);
};
myWorker.postMessage("go");




