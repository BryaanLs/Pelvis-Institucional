//* IMPORTS

//Estilos
import "./styles.css";

//Components
import Container from "../../components/container";
import Accordion from "../../components/accordion";
import BoxAnimation from "../../components/boxAnimation";
import CtaCard from "../../components/ctaCard";

//Fotos
import michele from "../../assets/img/webp/michelle.webp";
import juliana from "../../assets/img/webp/juliana.webp";
import thais from "../../assets/img/webp/thais.webp";
import cibele from "../../assets/img/webp/cibele.webp";

//Icons
import whatsappGreen from "../../assets/img/svgs/wppGreen.svg";
import CtaAcc from "../../components/ctaAcc";
import SpecCard from "../../components/specCard";
import { NavLink } from "react-router-dom";

const Tratamento = () => {
  return (
    <>
      <Container sectionClass="bgHeroTratamentos" />

      <Container mainClass="acc">
        <BoxAnimation>
          <Accordion title="Fisioterapia Pélvica">
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Gestação e Pós-Parto"
              >
                <p>
                  Durante a gestação, a Fisioterapia tem como objetivo manter a
                  qualidade de vida da gestante e preparar seu corpo para as
                  alterações futuras, prevenindo as disfunções mais comuns, como
                  as dores na coluna, a diástase abdominal e a incontinência
                  urinária. O trabalho visa também favorecer uma melhor
                  recuperação no período do pós-parto, independente da via
                  (vaginal ou cesárea). Atuamos, também, mais especificamente no
                  preparo corporal para o parto normal, através de técnicas e
                  exercícios que facilitarão o processo e irão garantir um
                  melhor desfecho para a saúde materna.
                </p>
                <p>
                  No pós-parto, favorecemos principalmente a recuperação do
                  assoalho pélvico e da musculatura abdominal e aliviamos os
                  desconfortos físicos que podem aparecer em decorrência dos
                  cuidados com o bebê. O objetivo é garantir que a mulher possa
                  executar todas as suas tarefas diárias e retornar à prática de
                  exercícios físicos com segurança.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Diástase Abdominal"
              >
                <p>
                  A diástase abdominal é uma condição na qual os feixes do
                  músculo reto abdominal afastam-se em decorrência do
                  crescimento da barriga. Essa condição é fisiológica, ou seja,
                  faz parte das alterações gestacionais. No entanto, uma
                  diástase não tratada pode trazer outros comprometimentos à
                  saúde, como dores e problemas de coluna e hérnias. Além disso,
                  está relacionada também ao aparecimento de disfunções
                  pélvicas, como a incontinência urinária e os prolapsos.
                  Portanto, é extremamente importante que a mulher seja avaliada
                  e receba orientações acerca dos cuidados diários e exercícios
                  corretos para favorecer a recuperação da função dos músculos
                  abdominais. A fisioterapia pélvica atua através de
                  orientações, exercícios e técnicas direcionadas para esse
                  objetivo.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Incontinência Urinária de Esforço"
              >
                <p>
                  Incontinência urinária caracteriza-se por qualquer perda
                  involuntária de urina e afeta mais de 50% das mulheres idosas.
                  A incontinência urinária de esforço é aquela perda urinária em
                  momentos de aumento da pressão abdominal, como na tosse, no
                  espirro, na gargalhada ou durante a prática de exercícios
                  físicos. O tratamento fisioterapêutico visa reeducar a
                  musculatura do assoalho pélvico através de recursos
                  específicos, como exercícios (cinesioterapia),
                  eletroestimulação, biofeedback, entre outros, além de orientar
                  sobre mudanças nos hábitos diários e incentivar a adoção de um
                  estilo de vida mais saudável.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Incontinência Urinária de Urgência"
              >
                <p>
                  A incontinência urinária de urgência caracteriza-se pela perda
                  involuntária de urina acompanhada de um desejo súbito e
                  incontrolável de urinar. A urgência geralmente é resultado de
                  uma hiperatividade do músculo detrusor (músculo da bexiga).
                  Essa situação normalmente é acompanhada pelo aumento da
                  frequência miccional. O tratamento fisioterapêutico visa
                  reeducar a musculatura do assoalho pélvico através de recursos
                  específicos, como exercícios (cinesioterapia),
                  eletroestimulação, biofeedback, entre outros, além de orientar
                  sobre mudanças nos hábitos diários e incentivar a adoção de um
                  estilo de vida mais saudável.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Incontinência Urinária Mista"
              >
                <p>
                  São as perdas involuntárias de urina que envolvem a combinação
                  dos dois tipos: urgência e esforço. Os sintomas podem ser
                  variados e incluem a perda de urina ao tossir ou espirrar
                  (incontinência de esforço) e também a urgência urinária com
                  perda de urina antes de chegar ao banheiro (incontinência de
                  urgência). O tratamento fisioterapêutico visa reeducar a
                  musculatura do assoalho pélvico através de recursos
                  específicos, como exercícios (cinesioterapia),
                  eletroestimulação, biofeedback, entre outros, além de orientar
                  sobre mudanças nos hábitos diários e incentivar a adoção de um
                  estilo de vida mais saudável.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Prolapsos de Órgãos Pélvicos (“Bexiga caída”)"
              >
                <p>
                  Os prolapsos consistem em uma saliência ou protrusão dos
                  órgãos pélvicos (a bexiga, o útero ou o reto) para dentro da
                  vagina, ou seja, esses órgãos perdem a sua sustentação e
                  acabam mudando para uma posição diferente da original. Isso
                  pode ocorrer por conta do envelhecimento, fraqueza dos
                  músculos do assoalho pélvico, gestação, parto, obesidade,
                  tabagismo, tosse crônica, atividades de alto impacto e até
                  mesmo por fatores genéticos. Nesses casos, a Fisioterapia
                  consiste num tratamento conservador e atua reeducando e
                  fortalecendo os músculos do assoalho pélvico com o objetivo de
                  melhorar o suporte oferecido a esses órgãos, evitando que o
                  quadro piore.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Bexiga Hiperativa / Hiperatividade do Detrusor"
              >
                <p>
                  É uma condição que está ligada ao surgimento da necessidade
                  súbita e urgente de urinar e também a um aumento da frequência
                  urinária ao longo do dia e durante a noite. Em muitos casos,
                  está associada à incontinência urinária. A Fisioterapia
                  utiliza recursos para tentar normalizar o funcionamento da
                  bexiga, reeducar os músculos do assoalho pélvico e melhorar os
                  hábitos diários que possam intensificar os sintomas.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Incontinência Pós-Prostatectomia"
              >
                <p>
                  Pessoas que passam por procedimentos cirúrgicos envolvendo a
                  retirada da próstata (por exemplo, no tratamento do câncer de
                  próstata ou hiperplasia prostática benigna), podem apresentar
                  sintomas após o procedimento, como é o caso da perda
                  involuntária de urina. Nesses casos, o paciente passa por uma
                  avaliação detalhada e a Fisioterapia visará reeducar a
                  musculatura do assoalho pélvico através de recursos
                  específicos, como exercícios (cinesioterapia),
                  eletroestimulação, biofeedback, entre outros, além de orientar
                  sobre mudanças nos hábitos diários e incentivar a adoção de um
                  estilo de vida mais saudável.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Síndrome da Bexiga Dolorosa / Cistite Intersticial"
              >
                <p>
                  É uma inflamação crônica da parede da bexiga que leva a dor
                  pélvica, urgência miccional, aumento da frequência urinária e
                  noctúria, na ausência de outras causas identificáveis. Alguns
                  dos fatores desencadeantes podem ser o stresse, hábitos
                  alimentares (bebidas alcoólicas, bebidas e alimentos contendo
                  cafeína, alimentos apimentados ou cítricos, refrigerantes,
                  soja), cigarro e relações sexuais. O tratamento demanda
                  bastante disciplina e paciência e é sempre multidisciplinar,
                  com Fisioterapia, psicoterapia, prática de exercícios físicos
                  e medicamentos. A Fisioterapia utiliza diversas técnicas para
                  alívio da dor, além de exercícios e orientações.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Vaginismo"
              >
                <p>
                  O vaginismo é uma disfunção sexual na mulher que ocasiona dor
                  na penetração vaginal. Trata-se de uma contração involuntária
                  dos músculos do assoalho pélvico ao tentar a penetração
                  vaginal, por exemplo, com o pênis, o dedo, o tampão ou o
                  espéculo. Sua intensidade pode variar de ligeira, tolerando
                  algum tipo de penetração, a grave, impossibilitando qualquer
                  penetração. A contração dos músculos do assoalho pélvico
                  acontece como um ciclo: a dor na relação gera mais contração,
                  que gera mais dor e mais recusa em ter a relação. Em muitos
                  casos, só de imaginar em ter relação sexual, a mulher pode
                  contrair a musculatura e sentir dor. Por isso, a avaliação e o
                  tratamento por uma equipe multidisciplinar são de extrema
                  importância. O tratamento envolve, geralmente, o ginecologista
                  especializado em sexualidade, o psicólogo e o fisioterapeuta
                  especialista. Alguns dos recursos de fisioterapia são técnicas
                  de terapia manual, dessensibilização associada ao uso de
                  dilatadores, respiração diafragmática, exercícios para o
                  assoalho pélvico, diferentes modalidades de estimulação
                  elétrica e termoterapia.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Vulvodínia"
              >
                <p>
                  É um desconforto vulvar, na maioria das vezes descrito como
                  dor em queimação, que ocorre na ausência de achados visíveis
                  específicos, clinicamente identificáveis ou de distúrbio
                  neurológico. É uma dor vulvar com pelo menos 3 meses de
                  duração, sem uma causa identificável. O diagnóstico é difícil
                  e deve ser feito através da exclusão de outros distúrbios. A
                  dor pode ser generalizada ou em um local mais específico da
                  vulva e pode ser provocada (ao toque, por exemplo) ou
                  espontânea. Apesar de não possuir uma causa definida, pode
                  estar associada a infecções urinárias ou vaginais de
                  repetição, traumas na região genital, genética ou alergias. O
                  tratamento é multidisciplinar, com médico ginecologista,
                  nutricionista, psicólogo e fisioterapeuta. A Fisioterapia
                  utiliza os recursos físicos para aliviar a dor e
                  dessensibilizar a região, evitando recidivas, além de
                  orientações.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Flatos Vaginais / Flacidez Vaginal"
              >
                <p>
                  Os flatos vaginais são caracterizados pela saída de ar do
                  canal vaginal, ocasionando um ruído semelhante a uma
                  flatulência comum. Podem ocorrer durante a atividade sexual,
                  mudanças de posição ou prática de atividade física. Na maioria
                  das vezes, os flatos vaginais são um evento natural e não
                  trazem malefícios à saúde. Porém, quando muito frequente, além
                  de causar constrangimento, os flatos vaginais podem indicar
                  fraqueza dos músculos do assoalho pélvico. Neste caso, é
                  importante realizar o tratamento junto a um Fisioterapeuta
                  Pélvico, não só para tratar os flatos vaginais, mas também
                  para prevenir outras complicações, como incontinência urinária
                  e prolapso dos órgãos pélvicos. O tratamento visa,
                  principalmente, o fortalecimento dos músculos do assoalho
                  pélvico através dos exercícios de kegel, eletroterapia,
                  biofeedback e cones vaginais.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Incontinência Anal (fezes ou flatos)"
              >
                <p>
                  A incontinência anal é uma condição em que uma pessoa não
                  consegue controlar a eliminação de gases e/ou fezes pelo ânus.
                  A incontinência fecal, por sua vez, é uma forma específica de
                  incontinência anal que se refere à incapacidade de controlar a
                  eliminação de fezes, independentemente de sua consistência.
                  Existem várias causas possíveis para a incontinência anal,
                  incluindo fraqueza dos músculos do esfíncter anal, lesões
                  neurológicas, cirurgias, doenças intestinais, entre outras. É
                  uma condição que pode causar desconforto e constrangimento
                  significativos, sendo necessário um tratamento específico que
                  pode incluir exercícios para fortalecer os músculos do
                  assoalho pélvico, eletroterapia, biofeedback anorretal e
                  terapia comportamental.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Constipação Intestinal / Anismo"
              >
                <p>
                  A constipação intestinal, também conhecida como &quot;prisão
                  de ventre&quot;, é uma condição em que ocorre dificuldade em
                  evacuar regularmente, com fezes duras e evacuações
                  infrequentes. A constipação intestinal pode ser acompanhada de
                  sintomas, como esforço excessivo para evacuar, sensação de
                  evacuação incompleta, desconforto abdominal e, em alguns
                  casos, dor. A longo prazo, pode causar danos e enfraquecimento
                  dos músculos do assoalho pélvico.
                </p>
                <p>
                  Anismo é uma condição em que os músculos do assoalho pélvico
                  não relaxam adequadamente durante uma evacuação, tornando
                  difícil ou impossível a passagem das fezes. Isso pode levar a
                  problemas de constipação crônica.
                </p>
                <p>
                  Se alguém sofre de constipação crônica ou persistente, é
                  importante procurar um profissional especializado para
                  avaliação e tratamento adequado, a fim de evitar complicações
                  e melhorar a qualidade de vida. O tratamento inclui treino de
                  coordenação e relaxamento dos músculos do assoalho pélvico,
                  além de mudanças comportamentais.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Dor Pélvica Crônica / Endometriose"
              >
                <p>
                  A Dor Pélvica Crônica é uma dor persistente na região inferior
                  do abdômen ou da pelve, com duração de pelo menos seis meses e
                  que interfere nas atividades do dia a dia. A causa da Dor
                  Pélvica Crônica não é bem definida, podendo incluir problemas
                  ginecológicos, como a endometriose, problemas
                  gastrintestinais, urinários, musculoesquelético, neurológico e
                  até mesmo psicológico. A fisioterapia pélvica atua no
                  reequilíbrio do sistema musculoesquelético global, envolvendo
                  músculos posturais, e na função dos músculos e órgãos
                  pélvicos, auxiliando na redução da dor.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Dismenorréia / Cólica menstrual"
              >
                <p>
                  É a dor pélvica associada à menstruação (cólica menstrual)
                  comum na adolescência e pode vir acompanhada de outras
                  manifestações como lombalgia, fadiga, náuseas, dor de cabeça,
                  entre outros. A fisioterapia pélvica irá atuar no alívio e
                  controle da dor por meio de recursos eletroterapêuticos e de
                  um programa de exercícios direcionado. A acupuntura é outro
                  ótimo recurso para a melhora da dor.
                </p>
              </Accordion>
            </BoxAnimation>
            <BoxAnimation
              addClass="accordionInternoAnimation"
              animation="opacity"
            >
              <Accordion
                addClass="accordionInterno"
                bolinha="noBall"
                title="Redesignação sexual"
              >
                <p>
                  Pessoas transgênero que passam pela cirurgia de redesignação
                  sexual podem ser atendidas pela Fisioterapia Pélvica com o
                  objetivo de reeducar ou recuperar as funções de toda a região
                  pélvica. Utilizamos técnicas direcionadas ao tratamento das
                  disfunções do assoalho pélvico, para adequação da musculatura
                  pélvica à sua nova inserção e à nova função, orientações e
                  exercícios para manutenção do canal vaginal, além de promover
                  o incremento funcional e/ou minimizar as queixas relacionadas
                  às consequências do pós-operatório.
                </p>
              </Accordion>
            </BoxAnimation>
          </Accordion>
        </BoxAnimation>

        <CtaAcc
          aText={"Agendar Fisioterapia Pélvica"}
          href="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar uma avaliação de Fisioterapia Pélvica. Estou buscando a clínica porque…"
          img={whatsappGreen}
        />
      </Container>

      <Container mainClass="acc">
        <BoxAnimation animation="left">
          <Accordion type="accordion" title="Acupuntura" corBolinha="verde">
            <p>
              É uma especialidade da Medicina Tradicional Chinesa que tem foco
              no tratamento de problemas relacionados à saúde. Quando voltada à
              saúde da mulher, busca o reequilíbrio de desarmonias em suas
              diferentes fases da vida, como no período menstrual, na menopausa,
              na gestação, no pré e pós-parto, entre outras fases que serão
              sempre cuidadas de forma individualizada. Diversas alterações e
              patologias podem ser tratadas com acupuntura como:
            </p>
            <ul>
              <BoxAnimation animation="left">
                <li>Dores pélvicas e osteoarticulares;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Cólicas/irregularidades menstruais;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>TPM;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Baixa libido;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Estímulo à fertilidade;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Preparo para gestação;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <BoxAnimation animation="left">
                  <li>
                    Questões emocionais, como ansiedade, depressão, síndrome do
                    pânico;
                  </li>
                </BoxAnimation>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Incontinência urinária;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Alterações da menopausa.</li>
              </BoxAnimation>

              <BoxAnimation animation="top">
                <h4>Melhora dos sintomas que podem aparecer na gestação:</h4>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Enjoos e vômitos;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Constipação;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Insônia;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Dores no geral;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Enxaqueca;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Diabetes gestacional;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>
                  &quot;Virar o bebê&quot; (para ficar em apresentação pélvica,
                  facilitando o parto normal);
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Preparo para o parto;</li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>Alterações no pós-parto.</li>
              </BoxAnimation>
            </ul>
            <p>
              Dentro da sessão de acupuntura, pode-se utilizar diferentes
              técnicas e instrumentos da Medicina Tradicional Chinesa e da
              Medicina Complementar:
            </p>
            <ul>
              <BoxAnimation animation="left">
                <li>
                  Agulhas: são de diferentes calibres e comprimentos, variando
                  de acordo com o ponto, o paciente e a função desejada. As
                  agulhas são sempre estéreis e de uso único. A aplicação quase
                  não causa dor. Não é colocado nenhum tipo de remédio;
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>
                  Auriculoterapia: conhecida também como auriculopuntura, é uma
                  técnica que utiliza pontos na orelha para tratar todo o corpo,
                  como uma zona reflexa. Para realizar o estímulo, pode-se
                  utilizar sementes, cristais, esferas de prata e ouro e agulhas
                  próprias para aurículo. Normalmente a paciente fica com os
                  pontos por um período de 5 a 7 dias;
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>
                  Moxabustão: conhecida como moxa, é um método que esquenta os
                  pontos de acupuntura ou de uma determinada região com o uso de
                  um bastão de Artemísia. O aquecimento remove bloqueios de
                  energia que obstruem o seu fluxo através dos meridianos
                  (canais de energia), eliminando a umidade e o frio que
                  promovem disfunções no organismo;
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>
                  Ventosa: são cúpulas de vidro, silicone ou plástico que
                  realizam uma sucção da pele, para ajudar a desfazer tensões
                  musculares, promover relaxamento da fáscia muscular e levar
                  mais nutrientes para a região de aplicação, através do aumento
                  da circulação sanguínea;
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>
                  Estimulação elétrica: é um aparelho que emite uma onda
                  elétrica pelas agulhas, otimizando o resultado da acupuntura;
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>
                  Laseracupuntura: o laser é uma terapia à base de luz que
                  penetra em profundidade no corpo. A terapia à laser pode ter
                  as mesmas funções de um tratamento de acupuntura, com a
                  diferença que deve- se fazer um ponto de cada vez. A técnica
                  não causa nenhuma dor ou desconforto, sendo um método ideal
                  para crianças ou pessoas sensíveis a agulhas. Pode ser feito
                  com ou sem o uso das agulhas.
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>
                  Além das funções clássicas, o laser permite também funções
                  analgésica, regenerativa e de relaxante muscular;
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>
                  Fitoacupuntura: é uma técnica de tratamento que utiliza o
                  efeito das plantas nos pontos de acupuntura. As partes das
                  plantas são coladas diretamente na pele para atuarem nos
                  pontos, meridianos e órgãos, gerando o equilíbrio da energia;
                </li>
              </BoxAnimation>
              <BoxAnimation animation="left">
                <li>
                  Aromaterapia: uso dos óleos essenciais para estimular
                  diferentes partes do cérebro para o tratamento de doenças
                  físicas e emocionais.
                </li>
              </BoxAnimation>
            </ul>
            <p>
              A escolha das técnicas a serem utilizadas na sessão é feita após
              avaliação detalhada da paciente.
            </p>
          </Accordion>
        </BoxAnimation>

        <CtaAcc
          aText={"Agendar Acupuntura"}
          href="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar uma avaliação de Acupuntura. Estou buscando a clínica porque…"
          img={whatsappGreen}
        />
      </Container>

      <Container mainClass="acc">
        <BoxAnimation animation="left">
          <Accordion title="Pilates">
            <h3>
              Pilates especializado em Gestação e Pós-parto / Diástase
              abdominal.
            </h3>
            <p>
              É um método de exercícios desenvolvido por Joseph Pilates na
              década de 1920 que visa trabalhar a conexão entre mente e corpo,
              como uma unidade, de modo a melhorar a consciência corporal. Pode
              ser feito com equipamentos ou no solo. Sua prática traz diversos
              benefícios, como melhora da flexibilidade e da mobilidade, ganho
              de força muscular e alívio de dores. Aqui na PELVIE oferecemos
              aulas de Pilates com fisioterapeuta especialista. As aulas são
              totalmente focadas em gestantes e mulheres no pós-parto,
              contribuindo para a manutenção da qualidade de vida nesse período,
              aliviando dores e preparando a mulher para lidar com todas as
              alterações corporais desse período.
            </p>
          </Accordion>
        </BoxAnimation>

        <CtaAcc
          aText={"Agendar Pilates"}
          href="https://wa.me/+5511913112992?text=Olá! Gostaria de saber mais sobre os planos e horários do Pilates. Estou buscando a clínica porque…"
          img={whatsappGreen}
        />
      </Container>

      <Container
        sectionClass="bgOurTeam tratamentosNossoTime"
        mainClass="ourTeam"
        id="time"
      >
        <span className="spanLabelLeaked">
          Atendimento empático e escuta ativa
        </span>
        <h3>Conheça nossa equipe</h3>
        <div className="ourTeamCards">
          <BoxAnimation animation="top">
            <SpecCard
              h3="Juliana de Sá"
              img={juliana}
              p="Fisioterapeuta especializada em Saúde da Mulher e Instrutora do Método Pilates"
              span="CREFITO-3/226407-F"
              id="DraJuliana"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <SpecCard
              h3="Michelle Villas Bôas"
              img={michele}
              p="Fisioterapeuta especializada em Saúde da Mulher, Doula e Educadora Perinatal"
              span="CREFITO-3/221316-F"
              id="DraMichelle"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Thays Roncato"
              img={thais}
              p="Fisioterapeuta especializada em Saúde da Mulher e Mestre em Ginecologia e Obstetrícia"
              span="CREFITO-3/296198-F"
              id="DraThays"
            />
          </BoxAnimation>
          <BoxAnimation animation="bottom">
            <SpecCard
              h3="Cibele Ferrari"
              img={cibele}
              p="Fisioterapeuta Acupunturista especializada em Saúde da Mulher e Gestantes"
              span="CREFITO-3/111858-F"
              id="DraCibele"
            />
          </BoxAnimation>
        </div>
        <NavLink to="/QuemSomos" className="ctaBtn2 tratamentosCta">
          Saiba mais sobre a PELVIE
        </NavLink>
      </Container>

      <Container>
        <CtaCard
          googleBtn={true}
          url="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar um horário para avaliação. Estou buscando a clínica porque…"
        >
          <p>Prevenção sempre em primeiro lugar!</p>
        </CtaCard>
      </Container>
    </>
  );
};

export default Tratamento;
