import React from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import { Flex, Link, Box, HStack, Text } from '@chakra-ui/react';
import { HIGHLIGHT_COLOR } from '../theme';
import Logo from '../assets/logo-white.png';
import { Link as RouterLink } from 'react-router-dom';

function Nav() {
  return (
    <Flex m={1} h={16} alignItems={'center'} justifyContent={'space-between'}>
      <RouterLink to="/">
        <Box
          borderRadius="3rem"
          as="img"
          bg="black"
          src={Logo}
          alt="lexdao white logo"
          maxW="3em"
        />
      </RouterLink>

      <Flex alignItems={'center'} mr={2}>
        <HStack>
          <Text _hover={{ bg: HIGHLIGHT_COLOR }}>
            <Link
              href="https://lexdao.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Link>
          </Text>
          <Text _hover={{ bg: HIGHLIGHT_COLOR }}>
            <Link
              href="https://discord.gg/lexdao"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community
            </Link>
          </Text>

          <RouterLink to="/directory">
            <Text _hover={{ bg: HIGHLIGHT_COLOR }}>Directory</Text>
          </RouterLink>

          <Text _hover={{ bg: HIGHLIGHT_COLOR }}>
            <Link
              href="https://app.daohaus.club/dao/0x64/0x58234d4bf7a83693dc0815d97189ed7d188f6981"
              target="_blank"
              rel="noopener noreferrer"
            >
              Governance
            </Link>
          </Text>
          <DarkModeSwitch />
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Nav;
