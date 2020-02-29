# CHAPTER 3. Literals, Variables, Constants, and Data Types

# 변수와 상수(Variables and Constants)

**변수 (Variable)** : 선언 후에 값 변경이 가능하다. initialize를 하지 않으면 undefined type으로 정의된다.

**상수 (Constants)**: 선언 후에 값 변경이 불가능하다. initialize를 하지 않으면 error가 발생한다. 보통 상수를 선언할 때 사용되기 때문에 대문자 + underscore로 변수명이 정의된다.

```js
    let targetTempC, room1 = "conference_room_a", room2 = "lobby";
    const ROOM_TEMP_C = 3, MAX_TEMP_C = 30;
    
    console.log(targetTempC);
    console.log(ROOM_TEMP_C);
```

# 식별자 이름(Identifier Names)

* 식별자는 문자, 달러 사인($), 밑줄(_)로 시작
* 식별자는 문자, 숫자, 달러 사인, 밑줄로 구성
* 유니코드 문자 허용
* 식별자는 예약어(reserved word) 사용 불가
* Camel Case(currentTempC) 또는 Snake Case(current_temp_c)를 이용하여 표현
* 클래스를 제외하고 **대문자**로 시작 불가

# 문자 (Literals)

**Identifiers** : 변수명
**Literals** 소스 코드의 고정된 값

```js
// room1 는 identifiers, "conference_room_a" 는 string literals 
let room1 = "conference_room_a";

```


# 원시 자료형과 객체 (Primitive Types and Objects)

JavaScript에서 값은 원시 자료형 또는 객체이다.

## 원시 자료형 (Primitive Types)

* 종류: [Numbers](#Numbers), [String](#String), [Boolean](#Boolean), [Null and Undefined](#Null-and-Undefined), [Symbols](#Symbols)
* 값을 변경할 수 없음

## 객체 (Objects)

* 종류: [Array, Date, RegExp, Map and WeakMap, Set and WeakSet
* 원시 자료형과 다르게 다른 타입의 값을 가질 수 있음

# 숫자 (Numbers)

JavaScript는 _IEEE-764 double precision floating-point_를 사용한다. 그리고 숫자 타입이 한 가지 종류밖에 없다. 이것을 10진수, 2진수, 8진수, 16진수로 네 가지 numeric literal로 인지한다. 

``` js
let count = 10;         // integer literal
const blue = 0x0000ff;  // hexadecimal
const umask = 0o0022;   // octal
const roomTemp = 21.5;  // decimal
const c = 3.0e6         // expotential
const e = -1.6e-19;
const inf = Infinity;
const ninf = -Infinity;
const nan = Nan;        // not a number
```

**유용한 Number 객체의 속성**

``` js
const small = Number.EPSILON;
const bigInt = Number.MAX_SAFE_INTEGER;
const max = Number.MAX_VALUE;
const minInt = Number.MIN_SAFE_INTEGER;
const min = Number.MIN_VALUE;
const ninf = Number.NEGATIVE_INFINITY;
const nan = Number.NaN;
const inf = Number.POSITIVE_INFINITY;
```

# 문자열 (String)

JavaScript는 Unicode text를 사용한다. 문자열을 표현하는 데에는 작은 따옴표('), 큰 따옴표(") 또는 억음부호(backtick `)를 사용한다. 

## 회피 (Escaping)

* 문자열 안에 문자열을 쓰고 싶을 때는 작은 따옴표 안에 큰 따옴표 사용
* 작은 따옴표 안에 작은 따옴표를 쓸 때는 백슬래시(\) 이용
* 문자열 안에 백슬래시 사용하고 싶을 때는 \\ 사용

## 특별한 문자 (Special Characters)

* \n : 새로운 줄
* \r : carriage return, 해당 문자열의 처음
* \t : tab
* \' & \" & \` : 작은 따옴표 & 큰 따옴표 & 억음부호
* \$ & \\
* \uXXX : 유니코드 문자
* \xXX : 라틴 -1 문자

``` js
const str2 = "De Morgan’s law: \u2310(P \u22c0 Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)";
console.log(str2); // 결과: De Morgan’s law: ⌐(P ⋀ Q) ⇔ (⌐P) ⋁ (⌐Q)

const str3 = "\xc9p\xe9e is fun, but foil is more fun.";
console.log(str3); // 결과: Épée is fun, but foil is more fun.
```

유니코드 문자를 사용할 때에는 회피(Escaping)이 불필요하다. 또한, 라틴-1은 유니코드의 일종이다. 

## 기타 문자열

* \0 : ASCII 코드의 null
* \v : 수직 tab
* \b : 백슬래시
* \f : form feed, 웹의 새 페이지

## 템플릿 문자열 (Template Strings)

**기존 문자열 합치기 방식**

``` js
let currentTemp = 19.5;
const msg = "The current temperature type is " + currentTemp + "\u00b0C";
```

**ES6의 템플릿 문자열**

``` js
let currentTemp = 19.5;
const msg = "The current temperature type is ${currentTemp}\u00b0C";
```

## 다중 문자열 (Multiline Strings)

다중 문자열을 사용하는 방법에는 `\n`을 사용하는 방식과 `` ` ``을 사용하는 방식이 있다. 하지만 작자는 코드의 가독성을 위해 `` ` `` 보다 `\n` 방식을 선호한다. 

``` js 
const multiline = 'Current temperature:\n' + 
`\t${currentTemp}\u00b0C\n` +
"Don't worry...the heat is on!";
```

# Booleans



# Symbols

# Null and Undefined

# Objects

# Number, String and Boolean Objects

# Arrays

# Trailing Commas in Objects and Arrays

# Dates

# Regular Expressions

# Map and Sets

# Data Type Conversion

