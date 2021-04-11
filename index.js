var isHotOutside = false;
var IsWeekday = true;
var hasMoneyInPocket = false;

var costOfMilk = 3;
var moneyInWallet = 42;
var thirstLevel = 7;

var shouldByIcecream = isHotOutside && hasMoneyInPocket;
console.log(shouldByIcecream)

var willGoSwimming = isHotOutside && IsWeekday;
console.log(willGoSwimming);

var isAGoodDay = isHotOutside && hasMoneyInPocket && IsWeekday;
console.log(isAGoodDay);

var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= 3 * 2;
console.log(willBuyMilk);