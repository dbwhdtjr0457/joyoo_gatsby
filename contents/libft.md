---
date: "2023-12-30"
title: "Libft"
categories: ["C", "Library"]
summary: "Libft 구현 목록 및 설명 글"
thumbnail: "./sample.jpeg"
---

## 함수 목록

1. ft_isalpha

   <aside>
   💡 int ft_isalpha(int c);

   </aside>

   → c가 알파벳일 때 0이 아닌 정수, 알파벳이 아닐 때 0을 리턴.

2. ft_isdigit

   <aside>
   💡 int ft_isdigit(int c);

   </aside>

   → c가 0부터 9까지의 숫자 문자일 때 0이 아닌 정수, 숫자 문자가 아닐 때 0을 리턴.

3. ft_isalnum

   <aside>
   💡 int ft_isalnum(int c);

   </aside>

   → c가 ft_isalpha거나 ft_isdigit일 때 0이 아닌 정수, 둘 다 아니면 0을 리턴.

4. ft_isascii

   <aside>
   💡 int ft_isascii(int c);

   </aside>

   → c가 유효한 아스키일 때, 즉 0부터 127 사이일 때 0이 아닌 정수, 아니면 0을 리턴.

5. ft_isprint

   <aside>
   💡 int ft_isprint(int c);

   </aside>

   → c가 출력 가능하면 0이 아닌 정수, 출력 불가능하면 0을 리턴. 출력가능한 범위는 스페이스바 (32)부터 ‘~’ (126)까지임.

6. ft_strlen

   <aside>
   💡 size_t ft_strlen(const char *s);

   </aside>

   → 문자열 s의 길이를 size_t형으로 리턴.

   s가 null일 때 segmentation fault가 뜨는 것은 원래 함수와 마찬가지.

7. ft_memset

   <aside>
   💡 void *ft_memset(void *b, int c, size_t len);

   </aside>

   → b에 len의 byte만큼 c를 저장함. 이때 c는 unsigned char로 변환됨. b를 리턴함.

   Q. memset에서 주의할 점으로 char형 배열 혹은 0일 때만 해야 하는데, 그 이유는?

   → ft_memset은 byte단위로 값을 저장하는데, 0은 몇 byte인지 상관없이 다 0이고, char형은 애초에 1byte라 괜찮으나, 다른 자료형(ex : int형은 4byte)같은 경우는 1byte로 이루어져있지 않기 때문에 정상적으로 우리가 원하는 값이 저장되지 않음.

   Q. void *를 unsigned char *로 캐스팅하는 이유?

   → 다음과 같은 이유로 unsigned char \*로 변환함.

   1. 메모리 접근을 1byte씩 하기 위해서는 자료형의 크기가 1byte인 자료형으로 캐스팅해야 함.
   2. 포인터는 음수의 값을 가질 수 없음.

   이와 같은 이유로 C에서는 void *를 unsigned char *로 변환하는 것이 관례라고 함.

8. ft_bzero

   <aside>
   💡 void ft_bzero(void *s, size_t n);

   </aside>

   → 문자열 s에 n의 byte만큼 0을 저장함. n이 0일 때 bzero는 아무것도 안 함.

9. ft_memcpy

   <aside>
   💡 void *ft_memcpy(void *dst, const void *src, size_t n);

   </aside>

   → src에서 dst로 n의 byte만큼 복사함. dst와 src가 겹치는 경우는 정의되지 않음. 원래의 dst를 리턴함.

10. ft_memmove

    <aside>
    💡 void *ft_memmove(void *dst, const void *src, size_t len);

    </aside>

    → src에서 dst로 len의 byte만큼 복사함. dst와 src는 겹칠 수 있으며, 이 경우 내용이 변질되지 않음. (non-destructive)

    Q. memcpy와 memmove는 기능이 동일해 보이는데, 겹치는 경우 memmove를 사용하면 된다고 한다. 둘의 차이가 어떤 것이 있길래 기능에 차이가 있는가?

    → ft_memcpy와 같은 경우 dst와 src가 겹치는 경우 정의되지 않으므로, 의도했던 메모리 복사가 제대로 이루어지지 않을 가능성이 있다. 그러나 ft_memmove와 같은 경우 dst와 src의 상대적 위치에 따라 행동하는 방식이 다르므로 non-destructive하게 행동이 이루어진다.

11. ft_strlcpy

    <aside>
    💡 size_t ft_strlcpy(char *dst, const char *src, size_t dstsize);

    </aside>

    → src에서 dstsize - 1개만큼 dst에 복사함. dstsize가 0이 아닐 경우 null로 마무리. src와 dst가 겹칠 경우 정의되지 않음. src의 길이를 리턴.

12. ft_strlcat

    <aside>
    💡 size_t ft_strlcat (char *dst, const char *src, size_t dstsize);

    </aside>

    → src를 dst의 끝에 복사하는데, dstsize - ft_strlen(dst) - 1개만큼 복사함. dstsize가 0이 아니거나 원래 dst가 dstsize보다 길지 않을 경우 null로 마무리됨. dstsize가 dst의 길이보다 작을 경우 dstsize + ft_strlen(src)가 리턴, 반대의 경우 ft_strlen(dst) + ft_strlen(src)가 리턴.

    > man에는 함수가 만들고자 했던 문자열의 길이를 리턴한다고 적혀있음.

13. ft_strncmp

    <aside>
    💡 int ft_strncmp(const char *s1, const char *s2, size_t n);

    </aside>

    → s1과 s2에서 n개의 문자까지 비교해서 다른 부분이 있을 경우 해당 아스키를 뺀 값을 리턴. 문자열을 비교하기 위해 설계되었으므로 null문자 이후의 값은 비교하지 않음. 즉 n이 s1이나 s2의 길이보다 클 경우 null문자가 오는 순간 종료.

14. ft_toupper

    <aside>
    💡 int ft_toupper(int c);

    </aside>

    → 소문자를 대문자로 바꿔줌. c가 소문자 아스키가 아닐 경우 바뀌지 않고 리턴되고, 소문자일 경우 대문자로 바뀐 후 리턴됨.

15. ft_tolower

    <aside>
    💡 int ft_tolower(int c);

    </aside>

    → toupper의 반대.

16. ft_strchr

    <aside>
    💡 char *ft_strchr(const char *s, int c);

    </aside>

    → char로 변환된 c가 s에서 처음으로 발견되는 곳을 찾아 그 위치를 char \*형으로 리턴. 이 때, 널문자도 문자열의 일부로 취급되기에 c가 널문자일 경우 널문자가 있는 포인터를 리턴. 만약 문자열 안에 없을 경우 null이 리턴.

17. ft_strrchr

    <aside>
    💡 char *ft_strrchr(const char *s, int c);

    </aside>

    → ft_strchr과 동작 원리는 동일, s의 출발점에서 시작하는 게 아닌 s의 마지막 지점에서부터 시작하여 탐색.

18. ft_memchr

    <aside>
    💡 void *ft_memchr(const void *s, int c, size_t n);

    </aside>

    → unsigned char로 변환된 c가 s의 첫 n byte 안에서 가장 먼저 발견되는 지점을 포인터로 리턴. n개 안에 발견되지 않을 경우 null을 리턴.

    Q. ft_strchr과 ft_memchr의 함수 기능이 유사해보이는데, 어떤 차이점이 있는가?

    → ft_strchr는 탐색하고 있는 대상이 string, 즉 문자열임을 가정하고 탐색하며 널문자가 감지될 경우 종료함. 반면 ft_memchr는 탐색하고 있는 대상이 무엇이던지 상관 없고, 메모리 차원에서 탐색하는 것임. 따라서 종료조건이 명시되어야 ft_memchr가 안전하게 종료될 수 있고, 이것이 ft_strchr의 매개변수에는 없는 size_t n.

19. ft_memcmp

    <aside>
    💡 int ft_memcmp(const void *s1, const void *s2, size_t n);

    </aside>

    → s1과 s2를 n byte만큼의 메모리를 비교함. 동일할 경우 0을 리턴. 다른 byte가 감지될 경우 두 byte의 차이가 리턴.

    Q. ft_strcmp와 ft_memcmp의 함수 기능이 유사해보이는데, 어떤 차이점이 있는가?

    → ft_strchr와 ft_memchr의 차이와 동일함.

20. ft_strnstr

    <aside>
    💡 char *ft_strnstr(const char *haystack, const char *needle, size_t len);

    </aside>

    → 문자열 haystack에서 문자열 needle의 len의 길이만큼을 찾는 함수. 널문자 이후는 탐색되지 않음. 제일 먼저 발견되는 위치의 첫 글자의 포인터가 리턴됨. needle이 빈 문자열일 경우 haystack이 리턴됨. needle이 haystack에 없을 경우, null이 리턴됨.

21. ft_atoi

    <aside>
    💡 int ft_atoi(const char *str);

    </aside>

    → str를 int로 바꿔주는 함수. str 맨 앞에 붙은 공백 문자들은 무시하며, 부호 문자는 2개 이상으로 들어올 수 없음.

    - man에 의하면 atoi()의 오류처리는 따로 하지 않는다고 한다.
    - `atoi()` 함수는 libc에 의해 `stdtol()`를 내부로 돌려서 결과값을 리턴하는 방식을 가졌다.
    - `atoi()`의 리턴 타입은 int, `strtol()`의 리턴 타입은 long 이다.
    - `atoi()`에서 나오는 언더플로우/오버플로우의 리턴값은 `strtol()`에서 나온 결과값을 처리하는 과정에서 나오는 `ERANGE` 오류이다.
    - `strtol()`함수에 오버플로우 값이 들어오면 LONG_MAX, 언더플로우 값이 들어오면 LONG_MIN을 리턴한다.
    - `atoi()`함수에 LONG 오버플로우 값이 들어오면 -1, 언더플로우 값이 들어오면 0을 리턴한다.
    - 출처 : [https://velog.io/@mjung/libft.hftatoi-underflow-overflow처리-관련-삽질](https://velog.io/@mjung/libft.hftatoi-underflow-overflow%EC%B2%98%EB%A6%AC-%EA%B4%80%EB%A0%A8-%EC%82%BD%EC%A7%88)

    long long을 넘어서는 값이 들어오면 -1 혹은 0으로 예외처리를 해두려고 시도했으나, long long의 오버플로우와 언더플로우를 감지하는 것 자체가 어려울 뿐더러, 예외처리를 추가할 수록 atoi 함수 본질 그 자체에 어긋나는 상황이 될 수 있다고 판단하여 int형 범위를 넘어서는 경우 -1, 0 리턴하도록 처리함.

22. ft_calloc

    <aside>
    💡 void *ft_calloc(size_t count, size_t size);

    </aside>

    → size 크기의 변수를 count개 만큼 저장할 수 있는 메모리 공간을 할당. 할당한 공간을 0으로 초기화. 새로 할당된 메모리의 포인터를 반환. 오류가 생길 경우, null을 리턴.

23. ft_strdup

    <aside>
    💡 char *ft_strdup(const char *s1);

    </aside>

    → s1을 복사할 충분한 메모리를 할당하고, 복사한 후, 해당 복사된 메모리의 포인터를 반환. 오류 시 null 리턴.

24. ft_substr

    <aside>
    💡 char *ft_substr(char const *s, unsigned int start, size_t len);

    </aside>

    → 원본 문자열 s로부터 부분 문자열을 생성하여 반환. 인덱스 start부터 시작, 최대 길이 len. 할당 실패 시 null 리턴.

    > start가 s의 길이보다 클 경우 오류로 0의 길이를 리턴함.

25. ft_strjoin

    <aside>
    💡 char *ft_strjoin(char const *s1, char const *s2);

    </aside>

    → 메모리를 할당받은 후 s1과 s2를 이어붙인 새로운 문자열을 생성하여 반환. 할당 실패 시 null 리턴.

26. ft_strtrim

    <aside>
    💡 char *ft_strtrim(char const *s1, char const *set);

    </aside>

    → 메모리를 할당받은 후 s1의 양쪽 끝에서 set에 지정된 문자들이 제거된 문자열 사본을 반환. 할당 실패 시 null 리턴.

27. ft_split

    <aside>
    💡 char **ft_split(char const *s, char c);

    </aside>

    → 메모리를 할당받은 후, 구분자 c를 기준으로 문자열 s를 분할하여 그 결과를 담은 새로운 문자열 배열을 반환. 문자열 배열의 끝은 null 포인터로 끝나야 함.

    > 주의! 할당을 받는 도중 null가드에 의해 리턴될 때, 이전까지 동적할당된 것들을 모두 할당해주어야 함.

28. ft_itoa

    <aside>
    💡 char *ft_itoa(int n);

    </aside>

    → 메모리를 할당받은 후, 인자로 받은 정수를 나타내는 문자열을 반환. 음수 역시 처리되어야 함. 할당 실패 시 null 리턴.

29. ft_strmapi

    <aside>
    💡 char *ft_strmapi(char const *s, char (*f)(unsigned int, char));

    </aside>

    → 문자열 s의 각 문자를 순회하며 함수 f를 적용하고, 해당 문자의 인덱스를 함수 f의 첫 번째 인자로 사용. 각 문자에 함수가 적용된 새로운 문자열을 생성. 할당 실패 시 null 리턴.

30. ft_striteri

    <aside>
    💡 void ft_striteri(char *s, void (*f)(unsigned int, char *));

    </aside>

    → 문자열 s의 각 문자를 순회하며 함수 f를 적용하고, 해당 문자의 인덱스를 함수 f의 첫 번째 인자로 사용, 각 문자의 주소값이 f 함수의 두 번째 인자로 사용되며, 경우에 따라 수정될 수 있음.(?)

    > ft_strmapi에서는 먼저 새로운 문자열을 위한 메모리를 할당하고, 함수를 적용시킨 요소를 메모리에 저장하는 방식이고, ft_striteri는 원본 문자열에 직접 함수를 적용하기 때문에, f의 매개변수가 포인터로 전달됨.

31. ft_putchar_fd

    <aside>
    💡 void ft_putchar_fd(char c, int fd);

    </aside>

    → 제공받은 파일 식별자에 따라 문자 c를 출력.

32. ft_putstr_fd

    <aside>
    💡 void ft_putstr_fd(char *s, int fd);

    </aside>

    → 제공받은 파일 식별자에 따라 문자열 s를 출력.

    > 문자열 s의 길이를 구하기 위해 ft_strlen을 사용할 경우, s가 null로 들어왔을 때에 대한 예외처리를 주의.

33. ft_putendl_fd

    <aside>
    💡 void ft_putendl_fd(char *s, int fd);

    </aside>

    → 제공받은 파일 식별자에 따라 문자열 s를 출력하고, 개행을 출력.

34. ft_putnbr_fd

    <aside>
    💡 void ft_putnbr_fd(int n, int fd);

    </aside>

    → 제공받은 파일 식별자에 따라 정수 n을 출력.

35. ft_lstnew

    <aside>
    💡 t_list *ft_lstnew(void *content);

    </aside>

    → 메모리를 할당하고 새로운 요소를 반환. 요소 내의 변수 content는 인자로 받아온 content로 초기화. 요소 내의 변수 next는 null로 초기화.

36. ft_lstadd_front

    <aside>
    💡 void ft_lstadd_front(t_list **lst, t_list *new);

    </aside>

    → 요소 new를 리스트의 맨 앞에 추가.

37. ft_lstsize

    <aside>
    💡 int ft_lstsize(t_list *lst);

    </aside>

    → 리스트에 포함된 요소의 개수를 리턴.

38. ft_lstlast

    <aside>
    💡 t_list *ft_lstlast(t_list *lst);

    </aside>

    → 리스트의 맨 마지막에 위치한 요소를 반환.

39. ft_lstadd_back

    <aside>
    💡 void ft_lstadd_back(t_list **lst, t_list *new);

    </aside>

    → 요소 new를 리스트의 맨 뒤에 추가.

40. ft_lstdelone

    <aside>
    💡 void ft_lstdelone(t_list *lst, void (*del)(void *));

    </aside>

    → 첫 번째 인자값으로 받은 요소의 content를 두 번째 인자로 받은 함수 포인터를 이용해 해제하고, 요소 자체의 메모리를 해제. next 포인터는 해제하면 안 됨.

41. ft_lstclear

    <aside>
    💡 void ft_lstclear(t_list **lst, void (*del)(void *));

    </aside>

    → 함수 del과 free를 이용하여 인자값으로 받은 요소와 그 뒤에 따라오는 리스트의 모든 요소들을 삭제하고 해제. 마지막으로, 리스트의 포인터는 null로 설정.

42. ft_lstiter

    <aside>
    💡 void ft_lstiter(t_list *lst, void (*f)(void *));

    </aside>

    → 리스트 lst를 순회하며 리스트에 포함된 모든 요소들의 content에 함수 f를 반복적으로 적용시킴.

43. ft_lstmap

    <aside>
    💡 t_list *ft_lstmap(t_list *lst, void *(*f)(void *), void (*del)(void *));

    </aside>

    → 리스트 lst의 요소들을 순회하며 각 요소의 content에 함수 f를 연속적으로 적용. 함수 f를 적용시킨 결과물들을 content로 담은 새로운 리스트 생성. del 함수들은 필요 시 각 요소의 content를 삭제하는데 사용. 할당 실패 시 null 리턴.

## 문제

1. const char *와 char const *의 차이는?

   → 똑같다!

2. unsigned char로 형변환해서 비교하는 이유?
   1. int를 unsigned char로 바꾸는 경우 함수에 명시되어있기 때문. + 그냥 char로 변환했을 때 범위를 넘어가면 오버플로우가 날 수 있기 때문.
   2. void *를 unsigned char *로 받는 경우
3. 매개변수를 char이 아닌 int로 받는 이유?

   → 함수가 너무 “오래돼서". 함수가 처음 만들어졌을 때 int로 받았던 것이 그대로 내려온 것.

   - 출처
     https://stackoverflow.com/questions/15798661/why-does-the-function-memchr-use-int-for-the-argument-of-char-type

4. size_t
   1. size_t와 unsigned int의 차이는?

      → 비슷하나, size_t는 32비트, 64비트 운영체제에 따라 그 범위가 달라진다. unsigned int는 64비트 운영체제라고 해서 64비트가 아니고 32비트일 수도 있다.

   2. size_t의 자료형 의미

      → sizeof 연산자의 리턴형.
5. static 변수와 함수의 차이?
   1. static 변수 : 외부 정적 변수, 내부 정적 변수로 나뉜다. 외부 정적 변수는 함수 외부에서 선언되며 프로그램 실행과 동시에 초기화되고, 전역변수의 역할을 한다. 내부 정적 변수는 함수 내부에서 선언되며 함수가 여러번 호출되더라도 선언과 초기화는 한 번만 이루어지고, 외부 함수에서 접근이 불가능하다.
   2. static 함수 : 비슷한 역할을 한다. 다른 소스 파일에서 접근이 불가능하며, 컴파일 시 다른 소스 파일에 같은 이름의 함수가 있다고 하더라도 컴파일 에러가 발생하지 않는다.
6. libft.a를 이용해 컴파일하는 법?

   → gcc -l . -L . -lft (컴파일할 파일)
