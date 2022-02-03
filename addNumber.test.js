import { addNumber } from './addNumber';

test('addNumber은 두 수를 더하는 함수입니다.', () => {
  // AAA(Arrange - Act - Assert) 패턴 사용

  // Arrange
  const numberA = 2;
  const numberB = 3;
  const result = 5;
  // Act
  const actResult = addNumber(numberA, numberB);
  // Assert
  expect(actResult).toBe(result);

  // 주요 matcher
  // toBeDefined(): 값이 undefined가 아닌지 검사
  // toBe()       : 원시형 데이터를 비교
  // toEqual()    : 참조형 데이터를 깊은 비교를 통해 비교
  // toBeTruthy() : 값이 참인지 검사
  // toContain()  : 특정 요소가 배열 안에 존재하는지 검사
  // not          : 다른 매쳐 함수 앞에 체이닝해 사용하며, 해당 값의 반대값이 참인지를 검사 (함수가 아닌 프로퍼티!)
});
