/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    preferences.forEach(function(preference, i) {
        var firstSpichonee = preferences[i] - 1;
        if (firstSpichonee !== i){ 
            var secondSpichonee = preferences[firstSpichonee] - 1,
                thirdSpichonee = preferences[secondSpichonee] - 1;
        if (i === thirdSpichonee){
            count++;
        }
        }
    });
    return count / 3; // my implementation
};