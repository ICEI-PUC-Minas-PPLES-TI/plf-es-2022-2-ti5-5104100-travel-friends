import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useInitialNavigation } from "../../../hooks/navigation";

import Button from "../../../components/Button";

import { styles } from "./styles";
import theme from "../../../utils/theme";

export default function Terms({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Termo de uso</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.textContent}>
            {
              "Os serviços do Travel Friends são fornecidos pela pessoa jurídica com a seguinte razão social:Travel Friends LTDA, como o nome fantasia Travel Friends, inscrito no CNPJ sob o nº 47.859.546/0001-66, titular da propriedade intelectual sobre software, website, aplicativos, conteúdos e demais ativos relacionados à plataforma Travel Friends. 1. Do objeto: a plataforma visa licenciar o uso de seu software, website, aplicativos e demais ativos de propriedade intelectual, fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos seus usuários. A plataforma caracteriza-se pela prestação do seguinte serviço: conexão de pessoas e lugares. A plataforma não realiza a distância por meio eletrônico de produtos ou serviços. 2. Da aceitação: o presente termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e as pessoas físicas ou jurídicas, usuárias do OU site OU aplicativo. Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a observá-las, sob o risco de aplicação das penalidades cabíveis. A aceitação do presente instrumento é imprescindível para o acesso e para a utilização de quaisquer serviços fornecidos pela empresa. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-los. 3. Do acesso dos usuários: serão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7(sete) dias por semana. No entanto, a navegação na plataforma ou em alguma de suas páginas poderá ser interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação necessária ao seu bom funcionamento."
            }
          </Text>
        </View>
      </ScrollView>
      <View
        style={{ paddingVertical: 30, backgroundColor: theme.colors.shape }}
      >
        <Button title="Aceitar" onPress={() => navigation.navigate("SignIn")} />
      </View>
    </View>
  );
}
