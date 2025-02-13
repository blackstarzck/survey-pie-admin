import { Button, Checkbox, Form, Input, InputNumber, Switch } from 'antd';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setQuestion } from '../../store/survey/surveySlice';

const { Item } = Form;

const groups = [
  {
    title: '공통 옵션',
    fields: [
      {
        type: 'text',
        label: '질문',
        name: 'title',
        rules: [{ required: true }],
      },
      {
        type: 'text',
        label: '설명',
        name: 'desc',
        rules: [{ required: true }],
      },
      {
        type: 'switch',
        label: '필수여부',
        name: 'required',
        rules: [],
        valuePropName: 'checked',
      },
    ],
  },
];

const detailFieldsMap = {
  text: [
    {
      type: 'text',
      label: 'placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
    },
    {
      type: 'number',
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
    },
  ],
  textarea: [
    {
      type: 'text',
      label: 'placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
    },
    {
      type: 'number',
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
    },
  ],
  select: [
    {
      type: 'text',
      label: '답변',
      name: 'items',
      rules: [{ required: true }],
    },
    {
      type: 'number',
      label: '최대 선택 가능 개수',
      name: 'max',
      rules: [{ required: false }],
    },
  ],
};

const getFieldInput = (type) => {
  if (type === 'text') {
    return <Input />;
  } else if (type === 'switch') {
    return <Switch />;
  } else if (type === 'number') {
    return <InputNumber />;
  }
  return null;
};

const OptionSection = () => {
  const [form] = Form.useForm();
  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data,
  );
  const question = useSelector((state) =>
    state.selectedQuestionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQuestionId.data],
  );

  const dispatch = useDispatch();
  const onSubmit = () => {
    const { title, desc, required, ...options } = form.getFieldsValue();
    const values = { title, desc, required, options, type: question.type };

    dispatch(
      setQuestion({
        index: selectedQuestionId,
        data: values,
      }),
    );
  };

  useEffect(() => {
    if (!question) return;

    const detailFieldsValue = {};

    if (question.type === 'text' || question.type === 'textarea') {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.placeholder = question.options.placeholder;
    } else if (question.type === 'select') {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.items = question.options.items.join(';');
    }

    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
      required: question.required,
      ...detailFieldsValue,
    });
  }, [form, question]);

  const mergedGroups = [
    ...groups,
    {
      title: '세부 옵션',
      fields: detailFieldsMap[question?.type] || [],
    },
  ];

  return (
    <OptionSectionWrapper>
      <Title>문항 옵션</Title>
      <FormWrapper>
        {question ? (
          <Form name="basic" layout="vertical" form={form}>
            {mergedGroups.map((group, idx) => {
              return (
                <Fragment key={idx}>
                  <SubTitle>{group.title}</SubTitle>
                  {group.fields.map((field, idx) => (
                    <Item key={idx} {...field}>
                      {getFieldInput(field.type)}
                    </Item>
                  ))}
                </Fragment>
              );
            })}
            <Item>
              <Button type="primary" onClick={onSubmit}>
                저장
              </Button>
            </Item>
          </Form>
        ) : (
          ' 질문을 선택해주세요.'
        )}
      </FormWrapper>
    </OptionSectionWrapper>
  );
};

const OptionSectionWrapper = styled.div`
  height: 100%;
  background-color: #ffffff;
  border-left: 1px solid #dddddd;
`;

const Title = styled.div`
  font-weight: 500;
  background-color: #f0f0f0;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
  text-align: center;
`;

const FormWrapper = styled.div`
  padding: 20px;
`;

const SubTitle = styled.div`
  font-size: 1.03rem;
  font-weight: 600;
  margin: 10px 0;
`;

export default OptionSection;
