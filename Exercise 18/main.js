// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Making a array of five places and print its original order
var five_places = ['Eiffel Tower', 'Skardu', 'Makkah', 'Madina', 'Iceland'];
console.log('Original order:', five_places);
// Print the array in alphabetical order without modifying the actual list
console.log('Alphabetical order:', __spreadArray([], five_places, true).sort());
// Show that the array is still in its original order
console.log('Still in original order:', five_places);
// Print the array in reverse alphabetical order without modifying the actual list
console.log('Reverse alphabetical order:', __spreadArray([], five_places, true).sort().reverse());
// Show that the array is still in its original order
console.log('Still in original order:', five_places);
// We have changed the original array order now
console.log('Original array reversed:', five_places.reverse());
// Print the array to show that it's back to its original order
console.log('Back to original order:', five_places.reverse());
// Print the array to show that its order has been  changed in alphabetical order now
console.log('Sorted in alphabetical order:', five_places.sort());
// We have changed again the original array order now in reverse order again
console.log('Original array reversed again:', five_places.reverse());
