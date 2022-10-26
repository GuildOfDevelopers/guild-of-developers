import styled from 'styled-components';

export const Form = styled.form`
  & [data-headlessui-state] {
    width: 256px;
    position: relative;
  }

  & [id^='headlessui-menu-button'] {
    position: relative;
    width: 100%;
    padding: 9px 19px;
    border-radius: 7px;
    background-color: var(--color-grey-3);

    font-family: Raleway;
    font-size: var(--fs-400);
    font-weight: var(--fw-400);
    line-height: var(--line-height-400);
    text-align: left;
    transition: font-weight 0.3s ease-in-out;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 14px;
      width: 0;
      height: 0;
      border-top: 9px solid var(--color-black);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      transition: all 0.3s ease-in-out;
    }
  }

  & [data-headlessui-state='open'] [id^='headlessui-menu-button'] {
    font-weight: var(--fw-600);
  }

  & [data-headlessui-state='open'] [id^='headlessui-menu-button']::before {
    border-top: none;
    border-bottom: 9px solid var(--color-black);
  }

  & [id^='headlessui-menu-items'] {
    position: absolute;
    padding: 30px 32px;
    z-index: 1;
    width: 100%;
    left: 0;
    top: 50px;
    display: flex;
    flex-direction: column;
    gap: 17px;
    background-color: var(--color-grey-3);
    border-radius: 7px;
  }
`;

export const FormName = styled.h3`
  margin: 0;
  margin-bottom: 28px;

  font-size: var(--fs-400);
  font-weight: var(--fw-700);
  line-height: var(--line-height-400);
`;

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

export const Submit = styled.button`
  padding: 10px 46px;
  color: var(--color-white);
  font-size: var(--fs-400);
  font-weight: var(--fw-700);
  line-height: var(--line-height-400);
  background-color: var(--color-grey);
  border-radius: 25px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  & > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & > span {
    display: inline-flex;
    align-items: center;
    user-select: none;
    font-weight: var(--fw-600);
    font-size: var(--fs-300);
    line-height: var(--line-height-300);
  }

  & > [type='checkbox'] ~ span::before {
    content: '';
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 2px solid var(--color-black);
    border-radius: 6px;
    margin-right: 16px;
    background-color: var(--color-white);
    background-repeat: no-repeat;
    background-position: center center;
  }

  & > [type='radio'] ~ span::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-black);
    border-radius: 50%;
    margin-right: 16px;
    background-repeat: no-repeat;
    background-position: center center;
  }

  /* стили при наведении курсора на checkbox */
  & > input + span:hover::before,
  & > input + span:focus::before,
  & > input:focus + span::before {
  }

  /* стили для чекбокса, находящегося в состоянии checked */
  & > input:checked[type='checkbox'] + span::before {
    border-color: var(--color-black);
    background-color: var(--color-black);
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.7104 1.20986C14.6175 1.11613 14.5069 1.04174 14.385 0.990969C14.2632 0.940201 14.1324 0.914062 14.0004 0.914062C13.8684 0.914062 13.7377 0.940201 13.6159 0.990969C13.494 1.04174 13.3834 1.11613 13.2904 1.20986L5.84044 8.66986L2.71044 5.52986C2.61392 5.43662 2.49998 5.36331 2.37512 5.3141C2.25026 5.2649 2.11694 5.24077 1.98276 5.24309C1.84858 5.24541 1.71617 5.27414 1.59309 5.32763C1.47001 5.38113 1.35868 5.45834 1.26544 5.55486C1.1722 5.65138 1.09889 5.76532 1.04968 5.89018C1.00048 6.01503 0.976347 6.14836 0.978669 6.28254C0.98099 6.41672 1.00972 6.54913 1.06321 6.67221C1.1167 6.79529 1.19392 6.90662 1.29044 6.99986L5.13044 10.8399C5.2234 10.9336 5.334 11.008 5.45586 11.0588C5.57772 11.1095 5.70843 11.1357 5.84044 11.1357C5.97245 11.1357 6.10316 11.1095 6.22502 11.0588C6.34687 11.008 6.45748 10.9336 6.55044 10.8399L14.7104 2.67986C14.8119 2.58622 14.893 2.47257 14.9484 2.34607C15.0038 2.21957 15.0324 2.08296 15.0324 1.94486C15.0324 1.80676 15.0038 1.67015 14.9484 1.54365C14.893 1.41715 14.8119 1.3035 14.7104 1.20986Z' fill='%23ffffff' /%3E%3C/svg%3E");
  }

  & > input:checked[type='radio'] + span::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cg fill='%23333'%3E%3Ccircle r='6' cx='50%25' cy='50%25' fill='%23000000'/%3E%3C/g%3E%3C/svg%3E");
  }
`;
