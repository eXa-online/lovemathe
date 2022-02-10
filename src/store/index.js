import Vuex from 'vuex'

let store = new Vuex.Store({
    state: {
        gameOrder: ['CountingOne', 'QuantityEquality', 'AddQuantities','QuantityComparison', 'ReduceQuantities', 'OneLook'], 
        activeGames: new Set(), 
        currentBadges: {
            'QuantityEquality': 
                `<svg class="non_active_badge" viewBox="0 0 192.62 192.22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M.17,42.44,14.85,32.32l-.74-17.89,17.8.49L41.75,0,55.86,10.93,72.55,4.67l5,17.18,17.15,4.81-6,16.87,11.06,14L85.15,67.68l.74,17.89-17.8-.49L58.25,100,44.14,89.07,27.45,95.33l-5-17.18L5.27,73.34l6-16.87Z" transform="translate(-0.17)" style="fill: #f90"/>
                </svg>`,
            'QuantityComparison': 
                `<svg class="non_active_badge" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.94318 9.35559L3.35576 9.12402C3.04797 9.71697 2.63817 10.545 2.20551 11.5625C2.0437 11.9414 1.85376 12.3993 1.6515 12.9536C1.28796 13.9741 1.0143 15.0242 0.83366 16.092C0.497358 17.6359 0.257124 19.199 0.114325 20.7725C0.0598028 21.4637 0.0298963 22.2075 0.0298963 22.2075C0.0193436 22.4724 0.00351756 22.8934 0 23.4355C0 23.8741 -5.15247e-06 24.4372 0.038688 25.0968L0.7422 25.067C0.710542 24.4302 0.703514 23.8776 0.705273 23.4373C0.705273 23.2618 0.705274 22.8478 0.728138 22.2987C0.728138 22.2987 0.756273 21.597 0.810795 20.8953C0.950091 19.3194 1.18858 17.7539 1.52486 16.2078C1.86237 14.6967 2.31511 13.2136 2.87912 11.7712C3.21681 10.9046 3.58263 10.0994 3.94318 9.35559Z" fill="#0C6634"/>
                <path d="M4.73301 6.72419C5.93602 4.80676 6.53752 3.84892 7.56114 2.86476C8.44053 2.02271 10.5722 -0.00525263 13.4671 1.02239e-05C14.0563 1.02239e-05 15.2963 0.0210608 16.4272 0.854347C17.1081 1.31745 17.6105 1.99805 17.8518 2.78406C18.1561 3.85593 17.8078 4.75763 17.6267 5.22954C17.263 6.12909 16.6536 6.90887 15.8679 7.48029C14.4714 8.49778 12.9395 8.54339 10.493 8.61356C9.36389 8.64689 8.45285 8.59075 6.5516 8.71881C5.54733 8.78548 4.76467 8.87144 3.99433 9.38018C3.11493 9.96611 2.76317 10.7608 2.69106 10.7169C2.57498 10.6555 3.39633 8.8539 4.73301 6.72419Z" fill="#016634"/>
                <path d="M4.7876 8.2066C5.35387 7.58427 5.98338 7.02222 6.66597 6.5295C7.5647 5.86112 9.1599 4.69978 11.4656 4.12788C12.9061 3.77702 14.0616 3.77702 14.0581 3.73492C14.0545 3.69282 12.6845 3.60159 11.4006 3.83316C7.40465 4.56294 4.78584 8.20485 4.7876 8.2066Z" fill="#004620"/>
                </svg>`,
            'AddQuantities': 
                `<svg class="non_active_badge" viewBox="0 0 161 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M145.722 56.1445C145.981 54.9141 146.111 53.6189 146.111 52.259C146.111 42.1569 138.277 33.8032 128.308 33.0909C128.567 31.5367 128.696 29.9826 128.696 28.4284C128.696 12.8219 116.008 0.129517 100.407 0.129517C87.5887 0.129517 76.7777 8.67746 73.2819 20.3985C70.4335 18.7796 67.1966 17.8082 63.7009 17.8082C53.084 17.8082 44.4741 26.4209 44.4741 37.0411C44.4741 38.0772 44.5388 39.1133 44.733 40.1494C44.2799 40.0847 43.762 40.0847 43.3088 40.0847C34.5046 40.0847 27.0599 46.0423 24.7941 54.137C11.3937 54.396 0.582642 65.4047 0.582642 78.8742C0.582642 92.538 11.6526 103.676 25.3768 103.676C26.0889 103.676 26.8657 103.611 27.5778 103.547H133.552C134.329 103.611 135.105 103.676 135.947 103.676C149.606 103.676 160.741 92.6027 160.741 78.8742C160.741 68.7073 154.591 59.9004 145.722 56.1445Z" fill="#417D3B"/>
                <path d="M145.852 56.1445C146.111 54.9141 146.24 53.6189 146.24 52.259C146.24 42.1569 138.407 33.8032 128.437 33.0909C128.373 33.0909 128.308 33.1557 128.243 33.1557C129.603 34.3861 133.552 38.401 134.652 44.812C136.141 53.8132 130.768 60.4184 129.926 61.3898C131.868 62.2316 135.817 64.2391 137.889 68.5131C141.126 75.1183 137.371 82.3063 135.753 85.4794C127.92 100.568 107.722 103.158 104.485 103.547C114.26 103.547 121.187 103.611 125.006 103.547C126.366 103.547 129.991 103.482 134.846 103.611C135.623 103.611 135.947 103.611 136.012 103.611C149.671 103.611 160.806 92.538 160.806 78.8095C160.87 68.7073 154.656 59.9004 145.852 56.1445Z" fill="#326437"/>
                </svg>`,
            'ReduceQuantities': 
                `<svg class="non_active_badge" viewBox="0 0 123 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.4451 133H60.3269C62.7765 114.413 63.951 95.6795 63.8422 76.9317C63.7454 59.7574 62.5713 42.6062 60.3269 25.5792H62.4451C64.9353 42.523 66.2444 59.6198 66.363 76.7455C66.4919 95.5696 65.1821 114.376 62.4451 133Z" fill="#5FA440"/>
                <path d="M61.3611 26.0967C65.0114 19.1265 70.2992 13.1484 76.7694 8.67696C87.8051 1.13611 98.9736 0.478952 104.607 0.21904C110.804 -0.060715 117.006 0.610261 123 2.20867C121.125 8.74722 117.462 14.6318 112.426 19.1994C102.534 27.9717 90.225 28.3315 81.7407 28.579C74.8617 28.7764 67.992 27.9397 61.3611 26.0967Z" fill="#3D8931"/>
                <path d="M61.6389 25.9355C57.9873 18.9674 52.6992 12.9913 46.2295 8.52141C35.1949 0.980557 24.0264 0.3234 18.3929 0.0634881C12.1964 -0.216338 5.99366 0.454639 0 2.05312C1.87542 8.59167 5.53767 14.4762 10.5742 19.0439C20.4658 27.8162 32.775 28.176 41.2582 28.4234C48.1378 28.6191 55.0079 27.7804 61.6389 25.9355Z" fill="#3D8931"/>
                <path d="M61.1287 26.0116C63.2934 24.3973 65.5512 22.9121 67.8905 21.5636C72.5062 18.9631 77.3764 16.8435 82.4245 15.2383C87.7838 13.3863 93.2615 11.8973 98.8205 10.7812C92.2787 12.6755 86.83 14.5528 82.6887 16.0828C77.6173 17.8419 72.6857 19.9814 67.9359 22.483C65.2404 23.9584 63.0859 25.3204 61.6208 26.2852L61.1287 26.0116Z" fill="#5FA440"/>
                <path d="M61.9417 26.0116C59.777 24.3973 57.5192 22.9121 55.1799 21.5636C50.5639 18.9629 45.6933 16.8433 40.6447 15.2383C35.2858 13.3863 29.8085 11.8972 24.2499 10.7812C30.7906 12.6755 36.2404 14.5528 40.3805 16.0828C45.4523 17.8418 50.3843 19.9813 55.1345 22.483C57.8288 23.9584 59.9845 25.3204 61.4496 26.2852L61.9417 26.0116Z" fill="#5FA440"/>
                </svg>`,
            'CountingOne': 
                `<svg class="non_active_badge" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_201_114)">
                <path d="M50.8677 16.6842C50.2156 16.032 49.0743 16.7929 44.8897 17.7168C42.9332 18.1515 42.9332 18.0428 41.3572 18.4233C39.7812 18.8037 38.2052 19.1841 36.5748 19.9993C34.6727 20.9232 32.2814 22.0644 31.0315 24.7274C30.1076 26.7382 30.2706 28.6403 30.3793 29.5098C30.488 30.7598 30.9771 32.8249 32.4988 34.7814C33.0423 35.4335 34.6727 37.3356 37.553 38.2052C40.1073 38.966 42.2267 38.4769 42.7702 38.3139C43.531 38.0965 45.5418 37.4987 47.2266 35.7596C49.3461 33.5314 49.7808 30.8141 50.2156 28.2055C50.433 26.6838 50.6504 24.4557 50.7591 22.934C50.7591 22.6622 50.8134 22.1188 50.8677 21.0862C51.0851 17.119 51.0308 16.9016 50.8677 16.6842Z" fill="#00742C"/>
                <path d="M9.34749 -5.56372e-06C10.4344 -0.217389 11.0866 1.35864 14.7277 5.10851C16.4125 6.90193 16.5211 6.79323 17.8254 8.20623C19.1841 9.67357 20.4884 11.1409 21.6297 13.043C22.934 15.2712 24.6187 18.0972 24.0752 21.5753C23.6948 24.2383 22.1731 25.9773 21.4666 26.7925C20.4884 27.9338 18.6406 29.7272 15.7603 30.5967C14.7821 30.9228 11.7931 31.6837 8.31491 30.5424C5.21719 29.5642 3.42378 27.6077 2.98901 27.1186C2.33686 26.3578 0.706483 24.4013 0.21737 21.4666C-0.489127 17.9341 0.923867 14.8364 2.28251 11.9561C3.04336 10.2714 4.40201 7.9345 5.32589 6.30412C5.43458 6.03239 5.76065 5.43459 6.4128 4.34767C8.80403 0.271724 9.02141 0.0543404 9.34749 -5.56372e-06Z" fill="#00742C"/>
                <path d="M19.2385 61.4652C19.5102 62.1717 21.4123 61.7913 24.8904 61.7913C27.7164 61.7913 29.7272 62.063 29.9446 61.4109C30.0533 61.0848 29.6185 60.8131 29.5098 59.7262C29.5098 59.6718 29.5098 59.5631 29.5098 58.6936C29.5098 58.0958 29.5098 57.7697 29.5098 57.498C29.5098 55.1068 29.5098 53.3133 29.3468 51.7373C29.2381 50.3243 29.1294 50.9765 28.6403 47.6614C28.5859 47.3353 28.3142 45.0528 28.3686 42.1724C28.4229 40.9225 28.4773 40.0529 28.9664 39.1834C29.4011 38.4226 30.0533 37.8247 30.2707 37.6617C30.4337 37.553 30.9772 37.0639 31.7924 36.6291C32.8793 36.0857 33.2597 36.1944 34.401 35.7053C35.2161 35.3792 35.9226 35.1075 36.6291 34.5096C37.8791 33.4227 38.2595 32.0097 38.3682 31.5206C38.8573 29.7272 38.3682 28.2055 38.3139 28.2055C38.2595 28.2055 38.4769 29.1837 38.0965 30.3794C37.9878 30.7054 37.6617 31.6837 36.8465 32.4988C36.4661 32.8249 36.0857 33.0967 33.7488 33.7488C31.5206 34.401 31.575 34.2379 30.4337 34.6727C28.912 35.2161 28.1512 35.4879 27.3903 36.0857C26.7925 36.5204 26.5751 36.9009 25.9773 36.9552C25.3795 37.0639 24.8904 36.8465 23.9665 36.2487C22.4992 35.3248 21.8471 34.7814 20.4341 33.8031C19.2385 32.988 19.2385 33.0423 18.4233 32.4445C17.9885 32.1184 16.9559 31.3032 15.9233 30.2163C14.9451 29.1837 13.5865 27.7708 12.6626 25.5426C11.7387 23.3144 11.63 21.3579 11.63 20.4884C11.5757 18.5319 11.8474 17.119 11.7387 17.0646C11.5757 17.0646 11.1409 18.4776 10.8692 20.0536C10.5975 21.4666 10.217 23.7492 10.8692 26.6295C11.0866 27.6621 11.63 29.8359 13.1517 31.8467C13.8582 32.7706 15.2169 34.1836 15.4342 34.401C16.0864 35.1075 16.7385 35.7596 16.7929 35.8139C17.3363 36.3574 17.445 36.4661 18.2059 37.1726C19.2928 38.2595 19.5645 38.5312 19.7276 38.7486C20.1623 39.2921 20.4341 39.5638 20.6514 40.0529C21.0319 40.8138 21.0862 41.5203 21.1406 41.9007C21.3036 44.1832 21.2493 46.3027 21.3036 48.5309C21.3036 49.183 21.3579 50.27 21.2492 51.7373C21.2492 52.0634 21.1949 52.4438 21.1949 52.8242C20.9775 55.1611 20.5971 56.7915 20.5428 57.1719C20.2167 58.6392 20.0536 59.4001 19.6732 60.1609C19.3471 60.9761 19.1298 61.1935 19.2385 61.4652Z" fill="#6A4527"/>
                </g>
                </svg>`,
            'OneLook':
                `<svg class="non_active_badge" viewBox="0 0 173 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M172.5 51.5154C172.5 34.6405 158.385 20.893 140.857 20.893C134.716 20.8898 128.702 22.6307 123.526 25.9102C118.143 11.12 103.503 0.5 86.3686 0.5C69.2346 0.5 54.7257 11.0548 49.2774 25.7798C44.1448 22.5793 38.2045 20.8851 32.1429 20.893C14.6804 20.893 0.500001 34.5753 0.500001 51.5154C0.498648 56.2009 1.60227 60.8217 3.72256 65.008C5.84285 69.1944 8.92097 72.8301 12.7106 75.6244C20.1945 83.5734 50.3274 89.5023 86.3686 89.5023C120.966 89.5023 150.114 84.0292 159.042 76.5366C163.184 73.7839 166.578 70.0609 168.925 65.6969C171.272 61.3329 172.5 56.4622 172.5 51.5154Z" fill="white"/>
                </svg>`
        },
        activeBadges: {
            'QuantityEquality': 
                `<svg class="animated_badge_big" viewBox="0 0 192.62 192.22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M.17,42.44,14.85,32.32l-.74-17.89,17.8.49L41.75,0,55.86,10.93,72.55,4.67l5,17.18,17.15,4.81-6,16.87,11.06,14L85.15,67.68l.74,17.89-17.8-.49L58.25,100,44.14,89.07,27.45,95.33l-5-17.18L5.27,73.34l6-16.87Z" transform="translate(-0.17)" style="fill: #f90"/>
                </svg>`,
            'QuantityComparison': 
                `<svg class="animated_badge_small" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.94318 9.35559L3.35576 9.12402C3.04797 9.71697 2.63817 10.545 2.20551 11.5625C2.0437 11.9414 1.85376 12.3993 1.6515 12.9536C1.28796 13.9741 1.0143 15.0242 0.83366 16.092C0.497358 17.6359 0.257124 19.199 0.114325 20.7725C0.0598028 21.4637 0.0298963 22.2075 0.0298963 22.2075C0.0193436 22.4724 0.00351756 22.8934 0 23.4355C0 23.8741 -5.15247e-06 24.4372 0.038688 25.0968L0.7422 25.067C0.710542 24.4302 0.703514 23.8776 0.705273 23.4373C0.705273 23.2618 0.705274 22.8478 0.728138 22.2987C0.728138 22.2987 0.756273 21.597 0.810795 20.8953C0.950091 19.3194 1.18858 17.7539 1.52486 16.2078C1.86237 14.6967 2.31511 13.2136 2.87912 11.7712C3.21681 10.9046 3.58263 10.0994 3.94318 9.35559Z" fill="#0C6634"/>
                <path d="M4.73301 6.72419C5.93602 4.80676 6.53752 3.84892 7.56114 2.86476C8.44053 2.02271 10.5722 -0.00525263 13.4671 1.02239e-05C14.0563 1.02239e-05 15.2963 0.0210608 16.4272 0.854347C17.1081 1.31745 17.6105 1.99805 17.8518 2.78406C18.1561 3.85593 17.8078 4.75763 17.6267 5.22954C17.263 6.12909 16.6536 6.90887 15.8679 7.48029C14.4714 8.49778 12.9395 8.54339 10.493 8.61356C9.36389 8.64689 8.45285 8.59075 6.5516 8.71881C5.54733 8.78548 4.76467 8.87144 3.99433 9.38018C3.11493 9.96611 2.76317 10.7608 2.69106 10.7169C2.57498 10.6555 3.39633 8.8539 4.73301 6.72419Z" fill="#016634"/>
                <path d="M4.7876 8.2066C5.35387 7.58427 5.98338 7.02222 6.66597 6.5295C7.5647 5.86112 9.1599 4.69978 11.4656 4.12788C12.9061 3.77702 14.0616 3.77702 14.0581 3.73492C14.0545 3.69282 12.6845 3.60159 11.4006 3.83316C7.40465 4.56294 4.78584 8.20485 4.7876 8.2066Z" fill="#004620"/>
                </svg>`,
            'AddQuantities': 
                `<svg class="animated_badge_small" viewBox="0 0 161 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M145.722 56.1445C145.981 54.9141 146.111 53.6189 146.111 52.259C146.111 42.1569 138.277 33.8032 128.308 33.0909C128.567 31.5367 128.696 29.9826 128.696 28.4284C128.696 12.8219 116.008 0.129517 100.407 0.129517C87.5887 0.129517 76.7777 8.67746 73.2819 20.3985C70.4335 18.7796 67.1966 17.8082 63.7009 17.8082C53.084 17.8082 44.4741 26.4209 44.4741 37.0411C44.4741 38.0772 44.5388 39.1133 44.733 40.1494C44.2799 40.0847 43.762 40.0847 43.3088 40.0847C34.5046 40.0847 27.0599 46.0423 24.7941 54.137C11.3937 54.396 0.582642 65.4047 0.582642 78.8742C0.582642 92.538 11.6526 103.676 25.3768 103.676C26.0889 103.676 26.8657 103.611 27.5778 103.547H133.552C134.329 103.611 135.105 103.676 135.947 103.676C149.606 103.676 160.741 92.6027 160.741 78.8742C160.741 68.7073 154.591 59.9004 145.722 56.1445Z" fill="#417D3B"/>
                <path d="M145.852 56.1445C146.111 54.9141 146.24 53.6189 146.24 52.259C146.24 42.1569 138.407 33.8032 128.437 33.0909C128.373 33.0909 128.308 33.1557 128.243 33.1557C129.603 34.3861 133.552 38.401 134.652 44.812C136.141 53.8132 130.768 60.4184 129.926 61.3898C131.868 62.2316 135.817 64.2391 137.889 68.5131C141.126 75.1183 137.371 82.3063 135.753 85.4794C127.92 100.568 107.722 103.158 104.485 103.547C114.26 103.547 121.187 103.611 125.006 103.547C126.366 103.547 129.991 103.482 134.846 103.611C135.623 103.611 135.947 103.611 136.012 103.611C149.671 103.611 160.806 92.538 160.806 78.8095C160.87 68.7073 154.656 59.9004 145.852 56.1445Z" fill="#326437"/>
                </svg>`,
            'ReduceQuantities': 
                `<svg class="animated_badge_small" viewBox="0 0 123 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.4451 133H60.3269C62.7765 114.413 63.951 95.6795 63.8422 76.9317C63.7454 59.7574 62.5713 42.6062 60.3269 25.5792H62.4451C64.9353 42.523 66.2444 59.6198 66.363 76.7455C66.4919 95.5696 65.1821 114.376 62.4451 133Z" fill="#5FA440"/>
                <path d="M61.3611 26.0967C65.0114 19.1265 70.2992 13.1484 76.7694 8.67696C87.8051 1.13611 98.9736 0.478952 104.607 0.21904C110.804 -0.060715 117.006 0.610261 123 2.20867C121.125 8.74722 117.462 14.6318 112.426 19.1994C102.534 27.9717 90.225 28.3315 81.7407 28.579C74.8617 28.7764 67.992 27.9397 61.3611 26.0967Z" fill="#3D8931"/>
                <path d="M61.6389 25.9355C57.9873 18.9674 52.6992 12.9913 46.2295 8.52141C35.1949 0.980557 24.0264 0.3234 18.3929 0.0634881C12.1964 -0.216338 5.99366 0.454639 0 2.05312C1.87542 8.59167 5.53767 14.4762 10.5742 19.0439C20.4658 27.8162 32.775 28.176 41.2582 28.4234C48.1378 28.6191 55.0079 27.7804 61.6389 25.9355Z" fill="#3D8931"/>
                <path d="M61.1287 26.0116C63.2934 24.3973 65.5512 22.9121 67.8905 21.5636C72.5062 18.9631 77.3764 16.8435 82.4245 15.2383C87.7838 13.3863 93.2615 11.8973 98.8205 10.7812C92.2787 12.6755 86.83 14.5528 82.6887 16.0828C77.6173 17.8419 72.6857 19.9814 67.9359 22.483C65.2404 23.9584 63.0859 25.3204 61.6208 26.2852L61.1287 26.0116Z" fill="#5FA440"/>
                <path d="M61.9417 26.0116C59.777 24.3973 57.5192 22.9121 55.1799 21.5636C50.5639 18.9629 45.6933 16.8433 40.6447 15.2383C35.2858 13.3863 29.8085 11.8972 24.2499 10.7812C30.7906 12.6755 36.2404 14.5528 40.3805 16.0828C45.4523 17.8418 50.3843 19.9813 55.1345 22.483C57.8288 23.9584 59.9845 25.3204 61.4496 26.2852L61.9417 26.0116Z" fill="#5FA440"/>
                </svg>`,
            'CountingOne': 
                `<svg class="animated_badge_big" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_201_114)">
                <path d="M50.8677 16.6842C50.2156 16.032 49.0743 16.7929 44.8897 17.7168C42.9332 18.1515 42.9332 18.0428 41.3572 18.4233C39.7812 18.8037 38.2052 19.1841 36.5748 19.9993C34.6727 20.9232 32.2814 22.0644 31.0315 24.7274C30.1076 26.7382 30.2706 28.6403 30.3793 29.5098C30.488 30.7598 30.9771 32.8249 32.4988 34.7814C33.0423 35.4335 34.6727 37.3356 37.553 38.2052C40.1073 38.966 42.2267 38.4769 42.7702 38.3139C43.531 38.0965 45.5418 37.4987 47.2266 35.7596C49.3461 33.5314 49.7808 30.8141 50.2156 28.2055C50.433 26.6838 50.6504 24.4557 50.7591 22.934C50.7591 22.6622 50.8134 22.1188 50.8677 21.0862C51.0851 17.119 51.0308 16.9016 50.8677 16.6842Z" fill="#00742C"/>
                <path d="M9.34749 -5.56372e-06C10.4344 -0.217389 11.0866 1.35864 14.7277 5.10851C16.4125 6.90193 16.5211 6.79323 17.8254 8.20623C19.1841 9.67357 20.4884 11.1409 21.6297 13.043C22.934 15.2712 24.6187 18.0972 24.0752 21.5753C23.6948 24.2383 22.1731 25.9773 21.4666 26.7925C20.4884 27.9338 18.6406 29.7272 15.7603 30.5967C14.7821 30.9228 11.7931 31.6837 8.31491 30.5424C5.21719 29.5642 3.42378 27.6077 2.98901 27.1186C2.33686 26.3578 0.706483 24.4013 0.21737 21.4666C-0.489127 17.9341 0.923867 14.8364 2.28251 11.9561C3.04336 10.2714 4.40201 7.9345 5.32589 6.30412C5.43458 6.03239 5.76065 5.43459 6.4128 4.34767C8.80403 0.271724 9.02141 0.0543404 9.34749 -5.56372e-06Z" fill="#00742C"/>
                <path d="M19.2385 61.4652C19.5102 62.1717 21.4123 61.7913 24.8904 61.7913C27.7164 61.7913 29.7272 62.063 29.9446 61.4109C30.0533 61.0848 29.6185 60.8131 29.5098 59.7262C29.5098 59.6718 29.5098 59.5631 29.5098 58.6936C29.5098 58.0958 29.5098 57.7697 29.5098 57.498C29.5098 55.1068 29.5098 53.3133 29.3468 51.7373C29.2381 50.3243 29.1294 50.9765 28.6403 47.6614C28.5859 47.3353 28.3142 45.0528 28.3686 42.1724C28.4229 40.9225 28.4773 40.0529 28.9664 39.1834C29.4011 38.4226 30.0533 37.8247 30.2707 37.6617C30.4337 37.553 30.9772 37.0639 31.7924 36.6291C32.8793 36.0857 33.2597 36.1944 34.401 35.7053C35.2161 35.3792 35.9226 35.1075 36.6291 34.5096C37.8791 33.4227 38.2595 32.0097 38.3682 31.5206C38.8573 29.7272 38.3682 28.2055 38.3139 28.2055C38.2595 28.2055 38.4769 29.1837 38.0965 30.3794C37.9878 30.7054 37.6617 31.6837 36.8465 32.4988C36.4661 32.8249 36.0857 33.0967 33.7488 33.7488C31.5206 34.401 31.575 34.2379 30.4337 34.6727C28.912 35.2161 28.1512 35.4879 27.3903 36.0857C26.7925 36.5204 26.5751 36.9009 25.9773 36.9552C25.3795 37.0639 24.8904 36.8465 23.9665 36.2487C22.4992 35.3248 21.8471 34.7814 20.4341 33.8031C19.2385 32.988 19.2385 33.0423 18.4233 32.4445C17.9885 32.1184 16.9559 31.3032 15.9233 30.2163C14.9451 29.1837 13.5865 27.7708 12.6626 25.5426C11.7387 23.3144 11.63 21.3579 11.63 20.4884C11.5757 18.5319 11.8474 17.119 11.7387 17.0646C11.5757 17.0646 11.1409 18.4776 10.8692 20.0536C10.5975 21.4666 10.217 23.7492 10.8692 26.6295C11.0866 27.6621 11.63 29.8359 13.1517 31.8467C13.8582 32.7706 15.2169 34.1836 15.4342 34.401C16.0864 35.1075 16.7385 35.7596 16.7929 35.8139C17.3363 36.3574 17.445 36.4661 18.2059 37.1726C19.2928 38.2595 19.5645 38.5312 19.7276 38.7486C20.1623 39.2921 20.4341 39.5638 20.6514 40.0529C21.0319 40.8138 21.0862 41.5203 21.1406 41.9007C21.3036 44.1832 21.2493 46.3027 21.3036 48.5309C21.3036 49.183 21.3579 50.27 21.2492 51.7373C21.2492 52.0634 21.1949 52.4438 21.1949 52.8242C20.9775 55.1611 20.5971 56.7915 20.5428 57.1719C20.2167 58.6392 20.0536 59.4001 19.6732 60.1609C19.3471 60.9761 19.1298 61.1935 19.2385 61.4652Z" fill="#6A4527"/>
                </g>
                </svg>`,
            'OneLook':
                `<svg class="animated_badge_big" viewBox="0 0 173 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M172.5 51.5154C172.5 34.6405 158.385 20.893 140.857 20.893C134.716 20.8898 128.702 22.6307 123.526 25.9102C118.143 11.12 103.503 0.5 86.3686 0.5C69.2346 0.5 54.7257 11.0548 49.2774 25.7798C44.1448 22.5793 38.2045 20.8851 32.1429 20.893C14.6804 20.893 0.500001 34.5753 0.500001 51.5154C0.498648 56.2009 1.60227 60.8217 3.72256 65.008C5.84285 69.1944 8.92097 72.8301 12.7106 75.6244C20.1945 83.5734 50.3274 89.5023 86.3686 89.5023C120.966 89.5023 150.114 84.0292 159.042 76.5366C163.184 73.7839 166.578 70.0609 168.925 65.6969C171.272 61.3329 172.5 56.4622 172.5 51.5154Z" fill="white"/>
                </svg>`
        }
    },
    mutations: {
        setBadge(state, payload) {
            state.currentBadges[payload.name] = payload.badge;
        },
        activateNextGame(state, name) {
            let nextGameIndex = state.gameOrder.indexOf(name) + 1;
            if (nextGameIndex < state.gameOrder.length){
                let nextGame = state.gameOrder[nextGameIndex];
                if (!state.activeGames.has(nextGame)){
                    state.currentBadges[nextGame] = state.activeBadges[nextGame];
                    state.activeGames.add(nextGame)
                }
            }
        },
        initializeActiveBadge(state, firstGame){
            state.currentBadges[firstGame] = state.activeBadges[firstGame];
            state.activeGames.add(firstGame)
        },
    },
    actions: {
        fetchBadge(context, payload) {
            fetch(payload.badgePath)
                .then(response => response.text())
                .then(function (badge) {
                    console.log(`get new badge for ${payload.name} from ${payload.badgePath}`)
                    payload['badge'] = badge
                    context.commit("setBadge", payload);
                });
        },
        postGameSetup(context, payload){
            context.commit("activateNextGame", payload.name);
            context.dispatch("fetchBadge", payload);
        },
    },
    getters: {
        currentBadgeByName: (state) => (name) => {
            return state.currentBadges[name];
        },
    },
},
)

store._mutations['initializeActiveBadge'][0]('CountingOne');

export default store