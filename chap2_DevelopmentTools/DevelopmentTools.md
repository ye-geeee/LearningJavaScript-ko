## Overview

1. Git : 버전 컨트롤 툴
2. Node: 브라우저 외부에서 Javascript를 사용할 수 있도록 하는 툴
3. Gulp: 프론트엔트 웹 개발의 스트리밍 빌드 시스템
4. ESLint: Javascript 코드에서 문제점을 분석하는 툴

# 1. Version Control: Git

**Repository 초기화**

    git init

**version control에서 track하지 않을 파일 설정은 .gitignore에 정보 추가**

    # in .gitignore file
    npm-debug.*
    node_modules
    .DS_store
    *.tmp
    
    git add .gitignore

수정된 모든 파일을 track하고 싶은 경우

    git add -A

# 2. Package management: NPM

**node와 npm version 확인**

    node -v
    npm -v

**npm 시작하기**

npm init 실행 시, package.json 파일이 생성됨

    npm init

**package 설치** 

package 설치 시, package.json의 dependencies에 라이브러리가 추가됨

    npm install [--save] (package name)[@version] 

# 3. Build Tools: Gulp and Grunt

Gulp는 Javascript 빌드 자동화 툴이다.

**gulp 설치**

    # install gulp as global
    npm install -g gulp
    # install gulp in local project directory
    npm install --save-dev gulp 

**예시 코드**

    const gulp = require('gulp');
    
    gulp.task('default', function(done){
    	console.log('started');
    	done();
    });

# 4. Babel: The Transcompiler

Babel, Traceur는 대표적인 Transcompiler이다.

**babel 설치**

    npm install --save-dev babel-preset-es2015

## Runing Bable with Gulp

Gulp는 pipe 컨셉을 사용한다. 아래 코드 실행 시, dist 폴더 아래에 ES6 > ES5 converting 된 코드가 생성된다. 

    const gulp = require('gulp')
    const babel = require('gulp-babel')
    
    gulp.task('default', function(done){
        gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest("dist"));
        gulp.src('public/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
        done();
    });

# 5. Linting

**eslint 설치**

    npm install -g eslint

**eslint 실행 - 해당 root 폴더에서 실행**

    eslint --init
    npm install --save-dev gulp-eslint

**eslint 실행**

    const gulp = require('gulp')
    const babel = require('gulp-babel')
    const eslint = require('gulp-eslint')
    
    gulp.task('default', function (done) {
      gulp.src(['es6/**/*.js', 'publie/es6/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
      gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
      gulp.src('public/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/dist'));
      done();
    });

eslint의 규칙을 변경하고 싶다면 .eslintrc 파일의 rule을 수정하면 된다.

# 6. Conclusion

**프로젝트 실행하는 방법**

1. git repository init (git init)
2. package.json 설정 (npm init)
3. gulpfile 작성 (gulpfile.js)
4. gulp-babel 모듈을 로컬에 저장하기 (npm install —save-dev gulp gulp-babel babel-preset-es2015)
5. .babelrc file 확인
6. ES5, ES6 transcompile 할 디렉토리 만들어놓기

**코딩 프로세스**

1. 코드 수정
2. gulp 실행
3. lint 에 따라 문법 수정
4. git add -A
5. git commit -m ""
6. git push