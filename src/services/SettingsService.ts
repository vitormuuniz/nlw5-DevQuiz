import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingRepository: Repository<Setting>;

  constructor() {
    this.settingRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {
    const userAlreadyExists = await this.settingRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const settings = this.settingRepository.create({
      chat,
      username,
    });

    await this.settingRepository.save(settings);

    return settings;
  }

  async findByUsername(username: string) {
    return await this.settingRepository.findOne({
      username,
    });
  }

  async update(username: string, chat: boolean) {
    await this.settingRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ username, chat })
      .where("username = :username", {
        username,
      })
      .execute();
  }
}

export { SettingsService };
