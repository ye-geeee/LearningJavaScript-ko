# while loops

``` js
let funds = 50;

while(funds > 1 && funds < 100){}
```

# Whitespace
가독성을 위해 condition에 따라 whitespace를 통일시킨다.

``` js
// 나쁜 예
if(funds > 1)[
    console.log("1");
    console.log("2");
]
else 
    console.log("3");

// 좋은 예
if(funds > 1)[
    console.log("1");
    console.log("2");
]
else {
    console.log("3");
}
```

# Helper Functions

``` js
function rand(m, n){
    return m = Math.floor((n - m + 1)*Math.random());
}

function randFace(){
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}
```

# if ... else 구문

``` js 
const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
let totalBet = rand(1, funds); 

if(totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet; 
}else{
    // distribute total bet
}
funds = funds - totalBet;
```

# do ... while Loop

``` js
let remaining = totalBet; 
do{
    let bet = rand(1, remaining); let face = randFace();
    bets[face] = bets[face] + bet; 
    remaining = remaining - bet;
} while(remaining > 0);
```

# for Loop

``` js
const hand = [];
for(let rool = 0; rool < 3; rool++){
    hand.push(randFace());
}
```

# Metasyntax

_Metasyntax_이라는 용어는 차례로 또 다른 구문을 설명하거나 전달하는 구문을 의미합니다. 그리고 컴퓨터과학에서는 즉시 **Extended Backus-Naur Form” (EBNF)**에 대해 떠올립니다. 

**Example**

while(condition)  
    statement

if(condition)  
    statement1  
[else  
    statement2]

do  
    statement  
while(condition);

for([initialization]; [condition]; [final-expression])
    statement

# 추가 for Loop 패턴

for(variable in object)  
    statement

for(variable of object)  
    statement
