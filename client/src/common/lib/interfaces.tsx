import { HTMLInputTypeAttribute, ReactNode, SyntheticEvent } from 'react';
import { INavItem } from './types';

// export interface IBase {
//   children?: ReactNode;
//   className?: string;
// }
export type IDropdown = {
  children: ReactNode;
  active?: string;
  className?: string;
  isLoading?: boolean;
  list?: {
    value: string;
    label: string;
    _count?: { [key: string]: number };
  }[] &
    Partial<INavItem[]>;
  onClick: (val: string) => void;
  options?: {
    caret?: boolean;
    position?: 'start' | 'center' | 'end';
    box?: boolean;
    animateCaret?: boolean;
  };
};

export declare namespace API {
  namespace Requests {
    interface SearchPosts {
      q?: string;
      filter?: {
        animated?: boolean;
        theme?: string;
        library?: string;
      };
      category?: string;
    }
  }
  interface Response<T = { T?: any }> {
    payload?: {
      results: T;
      count?: number;
    };
    error?: string;
    message?: string;
  }
  type UserRoles = 'ADMIN' | 'USER' | 'MOD';
  type UserPreferences = { preferredLibrary: string };

  namespace Models {
    interface Category {
      label: string;
      value: string;
      _count: {
        posts: number;
      };
    }
    interface Library {
      label: string;
      value: string;
      _count: {
        posts: number;
      };
    }

    interface User {
      id: string;
      twitterId?: string;
      discordId?: string;
      username: string;
      avatar: string;
      preferences: UserPreferences;
      role: UserRoles;
      createdAt: string;
    }
    interface Post {
      id: string;
      title: string;
      code: any;
      description: string;
      generatedImage?: string;
      animated: boolean;
      theme: string;

      //   author: User;
      category: string;
      author: User;
      library: string;
    }
  }
}

export declare namespace Hydration {
  type ReactQueryProps = {
    refetch: () => void;
    isRefetching: boolean;
    isLoading: boolean;
    error: unknown;
  };

  interface Posts extends ReactQueryProps {
    data?: API.Response<API.Models.Post[]>;
  }
}
export declare namespace Alert {
  interface Base {
    title?: string;
    label?: string;
    onClick?: (e: SyntheticEvent) => void;
    isLoading?: boolean;
  }
}

export declare namespace Form {
  interface InputBase {
    placeholder: string;
    value?: string;
    inputClassName?: string;
    error?: string;
    onChange: (value: string) => void;
  }
  interface Base {
    id: string;
    disabled?: boolean;
    description?: string | ReactNode;
    label?: string;
    regex?: (val: string) => void;
  }

  interface Toggle extends Base {
    active?: boolean;
    onClick: (val: boolean) => void;
    isLoading?: boolean;
    className?: string;
  }
  interface Textarea extends Base, InputBase {
    minLength?: number;
    maxLength?: number;
  }
  interface Label extends Base {}
  interface Input extends Base, InputBase {
    type?: HTMLInputTypeAttribute;
  }
}
export declare namespace Button {
  interface Base {
    layoutClass?: string;
    icon?: string;
    route?: string;
    onClick?: (e: SyntheticEvent) => void;
    title?: string;
    disabled?: boolean;
    isLoading?: boolean;
    className?: string;
  }
}
