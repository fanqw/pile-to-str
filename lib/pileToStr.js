module.exports = function(pile){
    // var str = pile.toFixed(3)
    // if(str.indexOf(".") > -1) {
    //    var newStr = str.replace(/\./, "+")
    //    return 'K' + newStr
    // }
    // return 'K' + str + '000'
    var result = '-'
    try {
        if(pile && typeof(pile) === 'number') {
            var str = pile.toFixed(3)
            if(str.indexOf(".") > -1) {
                var newStr = str.replace(/\./, "+")
                result = 'K' + newStr
            } else {
                result = 'K' + str + '000'
            }
        } else if (pile === 0) {
            result = 'K0'
        } else {
            throw new Error('传入的参数不能为空，且必须为Number类型')
        }
    } catch (error) {
        console.error(error);
    } finally {
        return result
    }
}