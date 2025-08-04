//1
function getRectangleArea(width, height) {
    return width * height;
}

console.log('Function Declaration:', getRectangleArea(5, 10));
//2
const getRectangleAreaExpr = function(width, height) {
    return width * height;
};

console.log('Function Expression:', getRectangleAreaExpr(6, 17));
//3
const getRectangleAreaArrow = (width, height) => width * height;

console.log('Arrow Function:', getRectangleAreaArrow(5, 10));
