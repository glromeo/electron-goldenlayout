const {GoldenLayout} = require("golden-layout");

const columns = ["A", "B", "C", "D"]
const rows = ["1", "2", "3", "4"]

const layoutManager = new GoldenLayout({
    content: [{
        type: "row",
        content: columns.map(column => {
           return {
               type: "column",
               content: rows.map(row => {
                   return {
                       type: "component",
                       componentName: "testComponent",
                       componentState: {label: `${column}:${row}`}
                   }
               })
           }
        })
    }]
});

let sub = 0;

layoutManager.registerComponent("testComponent", function (container, componentState) {
    container.element.innerHTML = `
		<h2 style="color: white">${componentState.label}</h2>
		<iframe src="https://${sub++}.home/">
	`;
});

layoutManager.init();
