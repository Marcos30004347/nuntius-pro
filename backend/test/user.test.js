import { editUserProfile, uploadUserPicture, getUserProfile } from "../src/services/user";
import { setDBClient } from "../src/database/init";
import { mockSupabaseSuccess, mockSupabaseError } from "./mock/supabase.mock"

describe('Testing user services', () => {

  test('get user profile test success', async () => {
    setDBClient(mockSupabaseSuccess);
    const user = await getUserProfile(0);
    expect(user.username).toBe("username");
  });

  test('get user profile test error', async () => {
    setDBClient(mockSupabaseError);
    expect(getUserProfile(0)).rejects.toThrow(Error);
  });

  test('edit user profile test success', async () => {
    setDBClient(mockSupabaseSuccess);
    const user = await editUserProfile(0, "username", "about", "base64Image");
    expect(user.id).toBe("id");
  });

  test('edit user profile test error', async () => {
    setDBClient(mockSupabaseError);
    expect(editUserProfile(0, "username", "about", undefined)).rejects.toThrow(Error);
  });

  test('upload user picture test error', async () => {
    setDBClient(mockSupabaseError);
    expect(uploadUserPicture(0, "id", "base64Image")).rejects.toThrow(Error);
  });

});