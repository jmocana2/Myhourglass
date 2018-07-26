import React from 'react';
import List from './';
import ButtonContained from '../../../core/Button/ui/ButtonContained';

export default [
  {
    name: "Horizontal",
    component: List,
    props: {
      children: (
        [
          "España",
          "Internacional",
          "Economía",
          "Deportes",
          "Sociedad",
          "Cultura",
          "Ciencia",
          "Tecnología",          
        ]
      )
    },
    background: {
      backgroundColor: '#c4c9e8',
      width: '100%'
    }
  },
  {
    name: "Vertical",
    component: List,
    props: {
      children: (
        [
          "España",
          "Internacional",
          "Economía",
          "Deportes",
          "Sociedad",
          "Cultura",
          "Ciencia",
          "Tecnología",          
        ]
      ),
      vertical: true
    },
    background: {
      backgroundColor: '#c4c9e8',
      width: '100%'
    }
  },
  {
    name: "Con Botones",
    component: List,
    props: {
      children: (
        [
          <ButtonContained color="darkPrimary">España</ButtonContained>,
          <ButtonContained color="primary">Internacional</ButtonContained>,
          <ButtonContained color="lightPrimary">Economía</ButtonContained>,
          <ButtonContained color="light">Deportes</ButtonContained>,
          <ButtonContained color="dark">Sociedad</ButtonContained>,
          <ButtonContained color="accent">Cultura</ButtonContained>,
          <ButtonContained color="primary">Ciencia</ButtonContained>,
          <ButtonContained color="darkPrimary">Tecnología</ButtonContained>,          
        ]
      ),
      vertical: true
    },
    background: {
      backgroundColor: '#c4c9e8',
      width: '100%'
    },
    tp: true
  }
];