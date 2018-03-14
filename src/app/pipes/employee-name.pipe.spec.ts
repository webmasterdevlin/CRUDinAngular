import { EmployeeNamePipe } from './employee-name.pipe';

describe('EmployeeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
