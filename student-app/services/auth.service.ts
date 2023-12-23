import supabase from "@/lib/supabase/database";

export const signInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async ({
  email,
  password,
  first_name,
  last_name,
  INE
}: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  INE: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name,
          last_name,
          INE
        },
      },
    });
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};
