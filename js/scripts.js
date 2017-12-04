function getTriangleArea(a, h) {
	if(a <= 0 || h <= 0) {
		return"Błąd danych";
	} else {
		return a*h/2;
	}
};
console.log(getTriangleArea(10, 6));
alert(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(0, 9);
var triangle3Area = getTriangleArea(9, 15);
console.log(triangle1Area);
alert(triangle1Area);
console.log(triangle2Area);
alert(triangle2Area);
console.log(triangle3Area);
alert(triangle3Area);